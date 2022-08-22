import imprt from './plugins/import';
import react from './plugins/react';
import reactHooks from './plugins/react-hooks';
import { NAMING_CONVENTION_CONFIG } from './plugins/typescript';

export = {
  env: {
    browser: true,
  },
  extends: ['./index.js'],
  plugins: [react.name, reactHooks.name, imprt.name],
  parserOptions: {
    exmaFeatures: {
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

    // Allow pascal cased variables (components)
    '@typescript-eslint/naming-convention': NAMING_CONVENTION_CONFIG.map(el => {
      if (typeof el !== 'object') {
        return el;
      }

      if (
        (el.selector !== 'variable' && el.selector !== 'function') ||
        el.format == null
      ) {
        return el;
      }

      return {
        ...el,
        format: [...el.format, 'PascalCase'],
      };
    }),
  },
};
