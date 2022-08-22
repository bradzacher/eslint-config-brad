/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  extends: ['./dist/index.js'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    // disable this because copy pasta
    'multiline-comment-style': 'off',
    'import/no-default-export': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      // basic camel case style
      {
        selector: 'default',
        format: ['camelCase'],
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },

      // all properties in the codebase are
      {
        selector: 'property',
        format: null,
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // enforce interfaces _don't_ start with an I
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // enforce that generics start with a T
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
    ],
  },
};
