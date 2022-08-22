import type { TSESLint } from '@typescript-eslint/utils';

import eslintBase from './plugins/eslint-base';
import eslintComments from './plugins/eslint-comments';
import imprt from './plugins/import';
import jest from './plugins/jest';
import node from './plugins/node';
import simpleImportSort from './plugins/simple-import-sort';
import typescript from './plugins/typescript';

const config: TSESLint.Linter.Config = {
  globals: {},
  env: {
    commonjs: true,
    es6: true,
  },
  overrides: [
    {
      // disable certain rules for testing as testing is messy business
      files: [
        'src/**/*.spec.{ts,tsx,mts,cts}',
        'src/**/*.test.{ts,tsx,mts,cts}',
        'src/**/__mocks__/**/*',
        'src/**/__mock__/**/*',
        'test/**/*',
      ],
      rules: {
        'import/prefer-default-export': 'off',
        strict: 'off',
        'typescript/no-explicit-any': 'off',
        'typescript/no-non-null-assertion': 'off',
      },
    },
    {
      // disable certain rules for typings as eslint mis-detects them
      files: ['**/*.d.ts'],
      rules: {
        strict: 'off',
        'typescript/no-explicit-any': 'off',
      },
    },
    {
      // allow local tooling scripts to use node modules
      files: [
        'config/**/*.{ts,tsx,mts,cts}',
        'scripts/**/*.{ts,tsx,mts,cts}',
        'tools/**/*.{ts,tsx,mts,cts}',
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
    simpleImportSort.name,
    typescript.name,
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
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
    ...simpleImportSort.rules,
    ...typescript.rules,
  },
  settings: {
    // settings for each plugin
    ...imprt.settings,
  },
};
export = config;
