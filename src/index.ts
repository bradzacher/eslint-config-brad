import eslintBase from './plugins/eslint-base';
import eslintComments from './plugins/eslint-comments';
import imprt from './plugins/import';
import jest from './plugins/jest';
import node from './plugins/node';
import typescript from './plugins/typescript';

export = {
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
        'import/prefer-default-export': 'off',
        'max-len': 'off',
        strict: 'off',
        'typescript/no-explicit-any': 'off',
        'typescript/no-non-null-assertion': 'off',
      },
    },
    {
      // disable certain rules for typings as eslint misdetects them
      files: ['**/*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
        strict: 'off',
        'typescript/no-explicit-any': 'off',
      },
    },
    {
      // allow local tooling scripts to use node modules
      files: [
        'config/**/*.ts',
        'config/**/*.tsx',
        'scripts/**/*.ts',
        'scripts/**/*.tsx',
        'tools/**/*.ts',
        'tools/**/*.tsx',
      ],
      rules: {
        strict: 'off',
        'import/no-nodejs-modules': 'off',
      },
    },
  ],
  plugins: [
    eslintComments.name,
    imprt.name,
    jest.name,
    node.name,
    typescript.name,
  ],
  parser: '@typescript-eslint/parser',
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
    ...imprt.rules,
    ...jest.rules,
    ...node.rules,
    ...typescript.rules,
  },
  settings: {
    // settings for each plugin
    ...imprt.settings,
  },
};
