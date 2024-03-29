import type { Import } from '../types/import/index';

const rules: Import = {
  // ensure default import coupled with default export
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
  // covered by typescript
  'import/default': 'off',

  // This rule reports any dynamic imports without a webpackChunkName specified in a leading
  // block comment in the proper format.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
  'import/dynamic-import-chunkname': 'off',

  // disallow invalid exports, e.g. multiple defaults
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
  // covered by typescript
  'import/export': 'off',

  // This rule enforces that all exports are declared at the bottom of the file.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
  'import/exports-last': ['error'],

  // Ensure consistent use of file extension within the import path
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
  'import/extensions': 'off',

  // disallow non-import statements appearing before import statements
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
  'import/first': ['error'],

  // Reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present
  // in a single file.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
  'import/group-exports': ['error'],

  // Forbid modules to have too many dependencies
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
  'import/max-dependencies': ['off', { max: 10 }],

  // ensure named imports coupled with named exports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md#when-not-to-use-it
  // covered by typescript
  'import/named': 'off',

  // enforces names exist at the time they are dereferenced
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
  // covered by typescript
  'import/namespace': 'off',

  // Require a newline after the last import/require in a group
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
  'import/newline-after-import': ['error'],

  // Forbid import of modules using absolute paths
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
  'import/no-absolute-path': ['error'],

  // disallow AMD require/define
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
  'import/no-amd': ['error'],

  // Reports if a module's default export is unnamed
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': [
    'off',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  // disallow require()
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
  'import/no-commonjs': 'off',

  // Ensures that there is no resolvable path back to this module via its dependencies.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
  'import/no-cycle': 'off',

  // forbid default exports.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
  'import/no-default-export': ['error'],

  // disallow use of jsdoc-marked-deprecated imports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
  'import/no-deprecated': 'off',

  // disallow duplicate imports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
  'import/no-duplicates': ['error'],

  // Forbid require() calls with expressions
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': ['error'],

  // Forbid the use of extraneous packages
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      peerDependencies: true,
      optionalDependencies: false,
    },
  ],

  // Reports the use of import declarations with CommonJS exports in any module except for the main module.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
  'import/no-import-module-exports': ['error'],

  // prevent importing the submodules of other modules
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
  'import/no-internal-modules': [
    'off',
    {
      allow: [],
    },
  ],

  // Forbid mutable exports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': ['error'],

  // do not allow a default import name to match a named export
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'off',

  // warn on accessing default export property names that are also named exports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
  // covered by typescript
  'import/no-named-as-default-member': 'off',

  // Prevent importing the default as if it were named
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
  'import/no-named-default': ['error'],

  // Prohibit named exports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
  'import/no-named-export': 'off',

  // disallow namespace imports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
  'import/no-namespace': 'off',

  // No Node.js builtin modules
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
  'import/no-nodejs-modules': 'off',

  // Prevent importing packages through relative paths
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
  'import/no-relative-packages': ['error'],

  // Use this rule to prevent imports to folders in relative parent paths.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
  'import/no-relative-parent-imports': 'off', // todo - enable?

  // Restrict which files can be imported in a given folder
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off',

  // Forbid a module from importing itself
  // https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
  'import/no-self-import': ['error'],

  // Prevent unassigned imports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
  // importing for side effects is perfectly acceptable, if you need side effects.
  'import/no-unassigned-import': 'off',

  // ensure imports point to files/modules that can be resolved
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
  'import/no-unresolved': 'off',

  // ensure modules both have an export and are imported in another module
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
  'import/no-unused-modules': 'off',

  // Ensures that there are no useless path segments
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': 'off',

  // Forbid Webpack loader syntax in imports
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': ['error'],

  // Enforce a convention in module import order
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
  'import/order': 'off',

  // Require modules with a single export to use a default export
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
  'import/prefer-default-export': 'off',

  // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
  // this should not be enabled until this proposal has at least been *presented* to TC39.
  // At the moment, it's not a thing.
  'import/unambiguous': 'off',
};

export default {
  name: 'import',
  rules,
  settings: {
    'import/extensions': ['js', 'jsx', 'ts', 'tsx', 'cts', 'mts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['ts', 'tsx', 'cts', 'mts'],
    },
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
    'import/resolver': {
      node: {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'cts', 'mts'],
      },
    },
  },
};
