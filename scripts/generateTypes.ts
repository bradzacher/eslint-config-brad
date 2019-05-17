import * as fs from 'fs';
import * as path from 'path';

import getRuleFinder = require('eslint-find-rules');
import packageJson = require('../package.json');

// get the list of all the eslint plugins installed
const plugins = Object.keys(packageJson.dependencies)
    .filter(d => d.startsWith('eslint-plugin-') || d.endsWith('/eslint-plugin'))
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

function toPascalCase(name: string): string {
    const camel = name
        .replace(/(-\w)/g, m => m[1].toUpperCase())
        .replace(/^(@\w)/, m => m[1].toUpperCase());
    const pascal = camel[0].toUpperCase() + camel.substr(1);

    return pascal;
}

const indent = '    ';
const typesFile = [
    '// this file is auto-generated. Run `regenerate-types` to regenerate it.',
    '',
    'declare namespace Rules {',
    `${indent}type RuleString = 'off' | 'warn' | 'error';`,
    `${indent}interface RuleArray extends Array<unknown> {`,
    `${indent}${indent}0: RuleString;`,
    `${indent}}`,
    `${indent}type RuleType = RuleString | RuleArray;`,
    ...Object.keys(rulesPerPlugin).map(k =>
        [
            `interface ${toPascalCase(k)} {`,
            ...rulesPerPlugin[k].map(rule => `${indent}'${rule}': RuleType;`),
            '}',
        ]
            .map(s => `${indent}${s}`)
            .join('\n'),
    ),
    '',
    `${indent}export {`,
    `${indent}${indent}RuleType,`,
    ...Object.keys(rulesPerPlugin).map(
        k => `${indent}${indent}${toPascalCase(k)},`,
    ),
    `${indent}};`,
    '}',
    '',
].join('\n');

fs.writeFileSync(
    path.resolve(__dirname, '../types/eslint-config.d.ts'),
    typesFile,
    'utf8',
);
console.info('Successfully Written.');
