import type { JSONSchema, TSESLint } from '@typescript-eslint/utils';
import * as fs from 'fs';
import { compile } from 'json-schema-to-typescript';
import mkdirp from 'mkdirp';
import * as path from 'path';
import { format } from 'prettier';

import * as prettierConfig from '../src/prettier';
import { toPascalCase } from './toPascalCase';

type Definition = {
  defs: string;
  typeExport: string;
};
async function compileSchema(
  typeName: string,
  schema: JSONSchema.JSONSchema4,
  index: number = 0,
): Promise<Definition> {
  const code = await compile(schema, `${typeName}${index}`, {
    bannerComment: '',
    style: prettierConfig,
  });

  return {
    defs: code.replace(/export /gu, ''),
    typeExport: `export type ${typeName} = 'off' | ${typeName}${index}`,
  };
}

const ruleLevelString = {
  enum: ['off', 'error', 'warn'],
};
function adjustSchema(schema: JSONSchema.JSONSchema4): JSONSchema.JSONSchema4 {
  if (schema.anyOf != null) {
    schema.anyOf.forEach(s => adjustSchema(s));

    return schema;
  }

  if (Array.isArray(schema.items)) {
    // work around shared / nested schemas
    if (schema.items[0] !== ruleLevelString) {
      schema.items.unshift(ruleLevelString);
    }
  } else if (schema.items !== undefined) {
    if (schema.items.oneOf != null || schema.items.anyOf != null) {
      const oldItem = schema.items;
      schema.items = [ruleLevelString];
      schema.additionalItems = oldItem;
    } else {
      schema.items = [ruleLevelString, schema.items];
    }
  } else {
    schema = {
      type: 'array',
      items: [ruleLevelString, schema],
    };
  }

  if (typeof schema.minItems === 'number') {
    schema.minItems += 1;
  } else {
    schema.minItems = 1;
  }

  if (typeof schema.maxItems === 'number') {
    schema.maxItems += 1;
  }

  return schema;
}

function recursivelyFixRefs(
  schema: JSONSchema.JSONSchema4 | string | null | boolean,
  idx: number,
): void {
  if (schema == null || typeof schema !== 'object') {
    return;
  }

  Object.keys(schema).forEach((key: keyof JSONSchema.JSONSchema4) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- known safe
    const current: Array<JSONSchema.JSONSchema4> | string | null = schema[key];
    if (current == null) {
      return;
    }

    if (Array.isArray(current)) {
      current.forEach(subSchema => {
        recursivelyFixRefs(subSchema, idx);
      });
    } else if (
      key === '$ref' &&
      typeof current === 'string' &&
      current.startsWith('#/')
    ) {
      schema[key] = `#/items/${idx + 1}/${current.substring(2)}`;
    } else if (typeof current === 'object') {
      recursivelyFixRefs(current, idx);
    }
  });
}

type Plugin = {
  name: string;
  rules: Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
  shortName: string;
};

async function convertRuleOptionsToTypescriptTypes({
  shortName: pluginName,
  rules,
}: Plugin): Promise<void> {
  await Promise.all(
    Object.entries(rules).map(async ([ruleName, rule]) => {
      if (ruleName === 'default' && pluginName !== 'import') {
        return;
      }

      const typeName = toPascalCase(ruleName);

      let code: string;
      if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- types aren't strictly correct
        rule.meta?.schema == null ||
        rule.meta.schema.length === 0
      ) {
        code = `export type ${typeName} = 'off' | ['warn' | 'error'];\n`;
      } else {
        const schema = rule.meta.schema;
        let fixedSchema: JSONSchema.JSONSchema4;
        if (Array.isArray(schema)) {
          const schemaArray: ReadonlyArray<JSONSchema.JSONSchema4> = schema;
          schema.forEach(recursivelyFixRefs);
          fixedSchema = {
            type: 'array',
            items: [ruleLevelString, ...schemaArray],
            minItems: 1,
          };
        } else {
          fixedSchema = adjustSchema(schema);
        }
        const unformattedCode = await compileSchema(typeName, fixedSchema);

        code = format(
          `${unformattedCode.defs}\n${unformattedCode.typeExport}`,
          {
            ...prettierConfig,
            parser: 'typescript',
          },
        );
      }

      const root = path.resolve(__dirname, '..');
      const folderName = path.resolve(root, `src/types/${pluginName}`);
      await mkdirp(folderName);
      if (ruleName.includes('/')) {
        const ruleFolder = ruleName.substr(0, ruleName.lastIndexOf('/'));
        await mkdirp(path.join(folderName, ruleFolder));
      }

      const filename = path.resolve(folderName, `${ruleName}.ts`);
      fs.writeFileSync(
        filename,
        [
          '// this file is auto-generated. Run `make regenerate-types` to regenerate it.',
          '',
          code,
        ].join('\n'),
      );

      console.info('Wrote', path.relative(root, filename));
    }),
  );
}

export { convertRuleOptionsToTypescriptTypes };
export type { Plugin };
