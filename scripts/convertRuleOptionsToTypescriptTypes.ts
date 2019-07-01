import { Rule } from 'eslint';
import fs from 'fs';
// eslint-disable-next-line import/no-unresolved
import { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import mkdirp from 'mkdirp';
import path from 'path';
import { format } from 'prettier';

import { toPascalCase } from './toPascalCase';

import prettierConfig = require('../.prettierrc.json');

interface Definition {
    defs: string;
    typeExport: string;
}
async function compileSchema(
    typeName: string,
    schema: JSONSchema4,
    index: number = 0,
): Promise<Definition> {
    const code = await compile(schema, `${typeName}${index}`, {
        bannerComment: '',
        style: prettierConfig as any,
    });

    return {
        defs: code.replace(/export /g, ''),
        typeExport: `export type ${typeName} = 'off' | ${typeName}${index}`,
    };
}

async function getRules(
    pluginName: string,
): Promise<Record<string, Rule.RuleModule>> {
    if (pluginName === 'eslint') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const lazyRules = await import('eslint/lib/rules'); // eslint-disable-line import/no-unresolved

        const rules: Record<string, Rule.RuleModule> = {};
        lazyRules.default.forEach((rule: Rule.RuleModule, ruleId: string) => {
            rules[ruleId] = rule;
        });

        return rules;
    }

    // TODO
    // - use eslint/lib/cli-engine/naming.js to resolve the name
    // - use eslint/lib/shared/relative-module-resolver.js to resolve the path
    // - require result from that

    if (pluginName.startsWith('@') && !pluginName.includes('/')) {
        return (await import(`${pluginName}/eslint-plugin`)).rules;
    }

    return (await import(`eslint-plugin-${pluginName}`)).rules;
}

const RuleLevelString = {
    enum: ['off', 'error', 'warn'],
};
function adjustSchema(schema: JSONSchema4): JSONSchema4 {
    if (schema.anyOf) {
        schema.anyOf.forEach(s => adjustSchema(s));

        return schema;
    }

    if (Array.isArray(schema.items)) {
        schema.items.unshift(RuleLevelString);
    } else if (schema.items !== undefined) {
        if (schema.items.oneOf || schema.items.anyOf) {
            const oldItem = schema.items;
            schema.items = [
                RuleLevelString,
            ];
            schema.additionalItems = oldItem;
        } else {
            schema.items = [
                RuleLevelString,
                schema.items,
            ];
        }
    } else {
        schema = {
            type: 'array',
            items: [
                RuleLevelString,
                schema,
            ],
        };
    }

    return schema;
}

async function convertRuleOptionsToTypescriptTypes(
    pluginName: string,
): Promise<void> {
    const rules = await getRules(pluginName);

    await Promise.all(
        Object.entries(rules).map(async ([ruleName, rule]) => {
            if (ruleName === 'default') {
                return;
            }

            const typeName = toPascalCase(ruleName);

            let code: string;
            if (
                !rule.meta ||
                !rule.meta.schema ||
                rule.meta.schema.length === 0
            ) {
                code = `export type ${typeName} = 'off' | ['warn' | 'error'];\n`;
            } else {
                const schema = rule.meta.schema;
                let fixedSchema: JSONSchema4;
                if (Array.isArray(schema)) {
                    fixedSchema = {
                        type: 'array',
                        items: [
                            RuleLevelString,
                            ...schema,
                        ],
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
                    } as any,
                );
            }

            const folderName = path.resolve(
                __dirname,
                `../src/types/${pluginName}`,
            );
            await new Promise((resolve, reject) =>
                mkdirp(folderName, (err, made) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(made);
                }),
            );

            const filename = path.resolve(folderName, `${ruleName}.ts`);
            fs.writeFileSync(
                filename,
                [
                    '// this file is auto-generated. Run `make regenerate-types` to regenerate it.',
                    '',
                    code,
                ].join('\n'),
            );

            console.info('Wrote', filename);
        }),
    );
}

export { convertRuleOptionsToTypescriptTypes };
