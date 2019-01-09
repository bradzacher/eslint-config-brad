import eslintBase from './plugins/eslint-base'
import eslintComments from './plugins/eslint-comments'
import jest from './plugins/jest'
import imprt from './plugins/import'
import typescript from './plugins/typescript'

module.exports = {
    globals: {},
    env: {
        commonjs: true,
        es6: true,
    },
    overrides: [
        {
            // disable certain rules for testing as testing is messy business
            files: [
                'src/**/*.spec.ts',
                'src/**/*.spec.tsx',
                'src/**/*.test.ts',
                'src/**/*.test.tsx',
                'src/**/__mocks__/**/*',
                'src/**/__mock__/**/*',
                'test/**/*',
            ],
            rules: {
                'typescript/no-explicit-any': 'off',
                'typescript/no-non-null-assertion': 'off',
                'import/prefer-default-export': 'off',
                'max-len': 'off',
                strict: 'off',
            },
        },
        {
            // disable certain rules for typings as eslint misdetects them
            files: ['**/*.d.ts'],
            rules: {
                'typescript/no-explicit-any': 'off',
                strict: 'off',
            },
        },
    ],
    plugins: [eslintComments.name, imprt.name, jest.name, typescript.name],
    parser: 'eslint-plugin-typescript/parser',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            globalReturn: false,
        },
        sourceType: 'module',
    },
    rules: {
        // rules for each plugin
        ...eslintBase.rules,
        ...eslintComments.rules,
        ...jest.rules,
        ...imprt.rules,
        ...typescript.rules,
    },
    settings: {
        // settings for each plugin
        ...imprt.settings,
    },
}
