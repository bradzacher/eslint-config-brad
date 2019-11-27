import react from './plugins/react';
import reactHooks from './plugins/react-hooks';
import imprt from './plugins/import';

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
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],
  },
};
