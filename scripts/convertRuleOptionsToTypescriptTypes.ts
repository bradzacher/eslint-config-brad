import { TSESLint } from '@typescript-eslint/experimental-utils';
import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies -- included as @types/json-schema
import { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import mkdirp from 'mkdirp';
import path from 'path';
import { format } from 'prettier';

import { toPascalCase } from './toPascalCase';
import prettierConfig from '../src/prettier';

type Definition = {
  defs: string;
  typeExport: string;
};
async function compileSchema(
  typeName: string,
  schema: JSONSchema4,
  index: number = 0,
): Promise<Definition> {
  const code = await compile(schema, `${typeName}${index}`, {
    bannerComment: '',
    style: prettierConfig,
  });

  return {
    defs: code.replace(/export /g, ''),
    typeExport: `export type ${typeName} = 'off' | ${typeName}${index}`,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- we don't care about the types
type RuleModule = TSESLint.RuleModule<any, any, any>;
async function getRules(
  pluginName: string,
): Promise<Record<string, RuleModule>> {
  if (pluginName === 'eslint') {
    const lazyRules = await import('eslint/lib/rules');

    const rules: Record<string, RuleModule> = {};
    lazyRules.default.forEach((rule, ruleId) => {
      rules[ruleId] = rule;
    });

    return rules;
  }

  // TODO
  // - use eslint/lib/cli-engine/naming.js to resolve the name
  // - use eslint/lib/shared/relative-module-resolver.js to resolve the path
  // - require result from that

  if (pluginName.startsWith('@') && !pluginName.includes('/')) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- dynamic import
    const plugin: { rules: Record<string, RuleModule> } = await import(
      `${pluginName}/eslint-plugin`
    );
    return plugin.rules;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- dynamic import
  const plugin: { rules: Record<string, RuleModule> } = await import(
    `eslint-plugin-${pluginName}`
  );
  return plugin.rules;
}

const ruleLevelString = {
  enum: ['off', 'error', 'warn'],
};
function adjustSchema(schema: JSONSchema4): JSONSchema4 {
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
  schema: JSONSchema4 | string | null | boolean,
  idx: number,
): void {
  if (schema == null || typeof schema !== 'object') {
    return;
  }

  Object.keys(schema).forEach((key: keyof JSONSchema4) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- known safe
    const current: Array<JSONSchema4> | string | null = schema[key];
    if (current == null) {
      return;
    }

    if (Array.isArray(current)) {
      current.forEach(subSchema => recursivelyFixRefs(subSchema, idx));
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

async function convertRuleOptionsToTypescriptTypes(
  pluginName: string,
): Promise<void> {
  const rules = await getRules(pluginName);

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
        let fixedSchema: JSONSchema4;
        if (Array.isArray(schema)) {
          schema.forEach(recursivelyFixRefs);
          fixedSchema = {
            type: 'array',
            items: [ruleLevelString, ...schema],
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
