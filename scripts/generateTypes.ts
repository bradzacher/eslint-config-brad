import type { TSESLint } from '@typescript-eslint/utils';
import * as fs from 'fs';
import * as path from 'path';
import { format } from 'prettier';

import packageJson = require('../package.json');
import * as prettierConfig from '../src/prettier';
import type { Plugin } from './convertRuleOptionsToTypescriptTypes';
import { convertRuleOptionsToTypescriptTypes } from './convertRuleOptionsToTypescriptTypes';
import { toPascalCase } from './toPascalCase';

type PendingPlugin = {
  name: string;
  rules: TSESLint.Linter.Plugin['rules'] | null;
  shortName: string;
};

async function getESLintCoreRules(): Promise<PendingPlugin> {
  const { builtinRules: eslintRules } = await import(
    'eslint/use-at-your-own-risk'
  );
  const plugin: Plugin = {
    name: 'eslint',
    rules: {},
    shortName: 'eslint',
  };
  eslintRules.forEach((rule, ruleId) => {
    // we need to explicitly iterate over each rule to ensure it gets loaded
    plugin.rules[ruleId] = rule;
  });

  return plugin;
}

async function main(): Promise<void> {
  // get the list of all the eslint plugins installed
  const plugins: Array<Promise<PendingPlugin>> = Object.keys(
    packageJson.peerDependencies,
  )
    .filter(
      d =>
        d.startsWith('eslint-plugin-') ||
        d.endsWith('/eslint-plugin') ||
        d.includes('/eslint-plugin-'),
    )
    .map<Promise<PendingPlugin>>(async d => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- dynamic import is untyped
      const plugin = (await import(d)) as TSESLint.Linter.Plugin;
      return {
        rules: plugin.rules ? { ...plugin.rules } : null,
        name: d,
        shortName: d
          .replace(/^eslint-plugin-/u, '')
          .replace(/\/eslint-plugin$/u, '')
          .replace(/\/eslint-plugin-/u, '/'),
      };
    })
    .concat(getESLintCoreRules());

  for await (const plugin of plugins) {
    if (!plugin.rules) {
      continue;
    }

    const rules: Plugin['rules'] = {};
    for (const [ruleName, rule] of Object.entries(plugin.rules)) {
      if (typeof rule === 'function') {
        // normalise functional rules
        rules[ruleName] = {
          meta: {
            messages: {},
            schema: {},
            type: 'suggestion',
          },
          create: rule,
        };
      } else if (rule.meta.deprecated === true) {
        // filter deprecated rules
        continue;
      } else {
        rules[ruleName] = rule;
      }
    }

    await convertRuleOptionsToTypescriptTypes({
      ...plugin,
      rules,
    });

    const ruleNames = Object.keys(rules).map(rule => ({
      name: rule,
      safeName: toPascalCase(rule.replace(`${plugin.shortName}/`, '')),
    }));
    const interfaceName = toPascalCase(plugin.shortName);

    const typesFile = [
      '// this file is auto-generated. Run `make regenerate-types` to regenerate it.',
      '',
      ...ruleNames.map(
        rule =>
          `import { ${rule.safeName} } from '../${plugin.shortName}/${rule.name}'`,
      ),
      '',
      `interface ${interfaceName} {`,
      ...ruleNames.map(
        rule =>
          `'${plugin.shortName === 'eslint' ? '' : `${plugin.shortName}/`}${
            rule.name
          }': ${rule.safeName};`,
      ),
      '}',
      '',
      'export {',
      `    ${interfaceName}`,
      '};',
      '',
    ].join('\n');

    const formatted = format(typesFile, {
      ...prettierConfig,
      parser: 'typescript',
    });

    fs.writeFileSync(
      path.resolve(__dirname, `../src/types/${plugin.shortName}/index.ts`),
      formatted,
      'utf8',
    );

    console.info('Wrote types for', plugin.name, '\n');
  }

  console.info('Done!');
}

void main();

export type { Plugin };
