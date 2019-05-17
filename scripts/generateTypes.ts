import * as fs from 'fs'
import * as path from 'path'

import getRuleFinder = require('eslint-find-rules')
import packageJson = require('../package.json')

// get the list of all the eslint plugins installed
const plugins = Object.keys(packageJson.dependencies)
    .filter(d => d.startsWith('eslint-plugin-') || d.endsWith('/eslint-plugin'))
    .map(dep => dep.replace('eslint-plugin-', ''))
    .map(dep => dep.replace('/eslint-plugin', ''))
const allPluginsPath = path.resolve(__dirname, './all-plugins.json')
fs.writeFileSync(allPluginsPath, JSON.stringify({ plugins }, null, 4))

// create the rule finder instance
const ruleFinder = getRuleFinder(allPluginsPath)
const allRules = ruleFinder.getAllAvailableRules()

const rulesPerPlugin: Record<string, Array<string>> = {
    eslint: [],
}
allRules.forEach(rule => {
    const split = rule.split('/')
    if (split.length > 1) {
        rulesPerPlugin[split[0]] = rulesPerPlugin[split[0]] || []
        rulesPerPlugin[split[0]].push(rule)
    } else {
        rulesPerPlugin.eslint.push(rule)
    }
})

const indent = '    '
const typesFile = [
    '// this file is auto-generated. Run `regenerate-types` to regenerate it.',
    '',
    'declare namespace Rules {',
    `${indent}type RuleString = 'off' | 'warn' | 'error'`,
    `${indent}interface RuleArray extends Array<unknown> {`,
    `${indent}${indent}0 : RuleString`,
    `${indent}}`,
    `${indent}export type RuleType = RuleString | RuleArray`,
    ...Object.keys(rulesPerPlugin).map(k => {
        const interfaceCamel = k
            .replace(/(-\w)/g, m => m[1].toUpperCase())
            .replace(/^(@\w)/, m => m[1].toUpperCase())
        const interfacePascal =
            interfaceCamel[0].toUpperCase() + interfaceCamel.substr(1)

        return [
            `export interface ${interfacePascal} {`,
            ...rulesPerPlugin[k].map(rule => `${indent}'${rule}' : RuleType`),
            '}',
        ]
            .map(s => `${indent}${s}`)
            .join('\n')
    }),
    '}',
    '',
].join('\n')

fs.writeFileSync(
    path.resolve(__dirname, '../types/eslint-config.d.ts'),
    typesFile,
    'utf8',
)
console.info('Successfully Written.')
