import type { TSESLint } from '@typescript-eslint/utils';

import imprt from './plugins/import';
import react from './plugins/react';
import reactHooks from './plugins/react-hooks';
import { NAMING_CONVENTION_CONFIG } from './plugins/typescript';

const config: TSESLint.Linter.Config = {
  env: {
    browser: true,
  },
  extends: ['./index.js'],
  plugins: [react.name, reactHooks.name, imprt.name],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...react.rules,
    ...reactHooks.rules,

    // No Node.js builtin modules
    'import/no-nodejs-modules': 'error',
    // Make sure the webpack and typescript configs line up
    'import/no-unresolved': 'off',

    '@typescript-eslint/naming-convention': [
      'error',
      ...NAMING_CONVENTION_CONFIG.map(el => {
        if (typeof el === 'string') {
          return null;
        }
        if (typeof el !== 'object' || el.format == null) {
          return el;
        }

        switch (el.selector) {
          case 'variable':
          case 'function':
            // Allow pascal cased variables and functions (components)
            return {
              ...el,
              format: [...el.format, 'PascalCase'],
            };

          default:
            return el;
        }
      }).filter(el => el != null),

      // allow the __html property
      {
        selector: 'property',
        filter: {
          regex: '^__html$',
          match: true,
        },
        format: null,
      },
    ],
  },
};

export = config;
