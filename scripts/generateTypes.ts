import * as fs from 'fs';
import * as path from 'path';
import { format } from 'prettier';

import { toPascalCase } from './toPascalCase';
import { convertRuleOptionsToTypescriptTypes } from './convertRuleOptionsToTypescriptTypes';

import getRuleFinder = require('eslint-find-rules');
import packageJson = require('../package.json');
import prettierConfig = require('../.prettierrc.json');

async function main(): Promise<void> {
    // get the list of all the eslint plugins installed
    const plugins = Object.keys(packageJson.dependencies)
        .filter(
            d => d.startsWith('eslint-plugin-') || d.endsWith('/eslint-plugin'),
        )
        .map(dep => dep.replace('eslint-plugin-', ''))
        .map(dep => dep.replace('/eslint-plugin', ''));
    const allPluginsPath = path.resolve(__dirname, './all-plugins.json');
    fs.writeFileSync(allPluginsPath, JSON.stringify({ plugins }, null, 4));

    // create the rule finder instance
    const ruleFinder = getRuleFinder(allPluginsPath);
    const allRules = ruleFinder.getAllAvailableRules();
    const rulesPerPlugin: Record<string, Array<string>> = {
        eslint: [],
    };
    allRules.forEach(rule => {
        const split = rule.split('/');
        if (split.length > 1) {
            rulesPerPlugin[split[0]] = rulesPerPlugin[split[0]] || [];
            rulesPerPlugin[split[0]].push(rule);
        } else {
            rulesPerPlugin.eslint.push(rule);
        }
    });

    await Promise.all(
        Object.keys(rulesPerPlugin).map(async plugin => {
            await convertRuleOptionsToTypescriptTypes(plugin);

            const ruleNames = rulesPerPlugin[plugin].map(rule => ({
                name: rule,
                safeName: toPascalCase(rule.replace(`${plugin}/`, '')),
            }));
            const interfaceName = toPascalCase(plugin);

            const typesFile = [
                '// this file is auto-generated. Run `make regenerate-types` to regenerate it.',
                '',
                ...ruleNames.map(
                    rule =>
                        `import { ${rule.safeName} } from '../${
                            plugin === 'eslint' ? 'eslint/' : ''
                        }${rule.name}'`,
                ),
                '',
                `interface ${interfaceName} {`,
                ...ruleNames.map(rule => `'${rule.name}': ${rule.safeName};`),
                '}',
                '',
                'export {',
                `    ${interfaceName}`,
                '};',
                '',
            ].join('\n');

            const formatted = format(typesFile, {
                ...(prettierConfig as any),
                parser: 'typescript',
            });

            fs.writeFileSync(
                path.resolve(__dirname, `../src/types/${plugin}/index.ts`),
                formatted,
                'utf8',
            );

            console.info('Wrote types for', plugin);
        }),
    );

    console.info('Done!');
}

main();
