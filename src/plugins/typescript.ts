import tsEslint from '@typescript-eslint/eslint-plugin';
import { TypescriptEslint } from '../types/@typescript-eslint';

// disable the base eslint rules covered by ts-eslint
const disabledBaseRules = Object.keys(tsEslint.configs.all).reduce<
  Record<string, 'off'>
>((acc, rule) => {
  if (!rule.startsWith('@typescript-eslint')) {
    acc[rule] = 'off';
  }

  return acc;
}, {});

const rules: TypescriptEslint = {
  // Grouping overloaded members together can improve readability of the code.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
  '@typescript-eslint/adjacent-overload-signatures': ['error'],

  // Requires using either T[] or Array<T> for arrays.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'generic',
    },
  ],

  // Disallows awaiting a value that is not a Promise
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
  '@typescript-eslint/await-thenable': ['error'],

  // Enforces that @ts-ignore will not to be used.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
  '@typescript-eslint/ban-ts-ignore': ['error'],

  // Enforces that types will not to be used.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        String: {
          message: 'Use string instead',
          fixWith: 'string',
        },
        Boolean: {
          message: 'Use boolean instead',
          fixWith: 'boolean',
        },
        Number: {
          message: 'Use number instead',
          fixWith: 'number',
        },
        Object: {
          message:
            'The Object type is mostly the same as unknown, you probably want Record<string, unknown> instead',
          fixWith: 'Record<string, any>',
        },
        object: {
          message:
            'The object type is hard to use, use Record<string, unknown> instead',
          fixWith: 'Record<string, unknown>',
        },
        Symbol: {
          message: 'Use symbol instead',
          fixWith: 'symbol',
        },
      },
    },
  ],

  // Enforce consistent brace style for blocks
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
  // covered by prettier
  '@typescript-eslint/brace-style': 'off',

  // Enforce camelCase naming convention.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
  '@typescript-eslint/camelcase': [
    'error',
    {
      allow: ['^UNSAFE_'],
      ignoreDestructuring: false,
      properties: 'never',
    },
  ],

  // This rule enforces PascalCased names for classes and interfaces.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
  '@typescript-eslint/class-name-casing': ['error'],

  // Enforces consistent usage of type assertions.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'never',
    },
  ],

  // Consistent with type definition either interface or type.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

  // Explicit types for function return values makes it clear to any calling code what type is returned.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowDirectConstAssertionInArrowFunctions: true,
    },
  ],

  // Leaving off accessibility modifier and making everything public can make your interface hard to use by others
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
    },
  ],

  // require or disallow spacing between function identifiers and their invocations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  // covered by prettier
  '@typescript-eslint/func-call-spacing': ['off', 'never'],

  // Enforces naming of generic type variables.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
  '@typescript-eslint/generic-type-naming': [
    'error',
    '^T([A-Z0-9][a-zA-Z0-9]*){0,1}$',
  ],

  // Enforce consistent indentation.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  // covered by prettier
  '@typescript-eslint/indent': 'off',

  // Prefixing interfaces with "I" can help telling them apart at a glance.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
  '@typescript-eslint/interface-name-prefix': ['error', 'never'],

  // Enforces a consistent member delimiter style in interfaces and type literals.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  // covered by prettier
  '@typescript-eslint/member-delimiter-style': 'off',

  // It can be helpful to enforce naming conventions for private (and sometimes protected) members of an object.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
  '@typescript-eslint/member-naming': 'off',

  // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
  // classes and class expressions easier to read, navigate and edit.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
  '@typescript-eslint/member-ordering': 'off',

  // Use of the Array constructor to construct a new array is generally discouraged in favor of array literal
  // notation because of the single-argument pitfall and because the Array global may be redefined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  '@typescript-eslint/no-array-constructor': ['error'],

  // Disallow the delete operator with computed key expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
  '@typescript-eslint/no-dynamic-delete': 'off',

  // Disallow Empty Functions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: ['private-constructors', 'protected-constructors'],
    },
  ],

  // This rule aims to ensure that only meaningful interfaces are declared in the code
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
  '@typescript-eslint/no-empty-interface': ['error'],

  // This rule goes doesn't allow any types to be defined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  '@typescript-eslint/no-explicit-any': [
    'error',
    {
      fixToUnknown: true,
      ignoreRestArgs: false,
    },
  ],

  // Disallow extra non-null assertion
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],

  // disallow unnecessary parentheses
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  // covered by prettier
  '@typescript-eslint/no-extra-parens': 'off',

  // Forbids the use of classes as namespaces.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
  '@typescript-eslint/no-extraneous-class': [
    'warn',
    {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
    },
  ],

  // Requires Promise-like values to be handled appropriately
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: false,
    },
  ],

  // Disallow iterating over an array with a for-in loop
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  '@typescript-eslint/no-for-in-array': ['error'],

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: true,
      ignoreProperties: true,
    },
  ],

  // Disallow Magic Numbers
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  '@typescript-eslint/no-magic-numbers': 'off',

  // Enforce valid definition of new and constructor.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
  '@typescript-eslint/no-misused-new': ['error'],

  // Avoid using promises in places not designed to handle them
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  '@typescript-eslint/no-misused-promises': ['error'],

  // This rule aims to standardise the way modules are declared
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
  '@typescript-eslint/no-namespace': [
    'error',
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],

  // Using non-null assertions cancels the benefits of the strict null-checking mode
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
  // warn discourage it - it can be specifically disabled in code if there's a valid use case
  '@typescript-eslint/no-non-null-assertion': ['warn'],

  // This rule disallows the use of parameter properties in constructors,
  // forcing the user to explicitly declare all properties in the class.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
  '@typescript-eslint/no-parameter-properties': ['error'],

  // Disallows invocation of require()
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
  '@typescript-eslint/no-require-imports': 'off',

  // Disallow aliasing this.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
  // warn discourage it - it can be specifically disabled in code if there's a valid use case
  '@typescript-eslint/no-this-alias': [
    'warn',
    {
      allowDestructuring: false,
      allowedNames: [],
    },
  ],

  // Disallow the use of type aliases
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
  '@typescript-eslint/no-type-alias': 'off',

  // Condition expressions must be necessary
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
  '@typescript-eslint/no-unnecessary-condition': [
    'error',
    { allowConstantLoopConditions: true },
  ],

  // Warns when a namespace qualifier is unnecessary
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  // Warns if an explicitly specified type argument is the default for that type parameter
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  // Warns if a type assertion does not change the type of an expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
  '@typescript-eslint/no-unnecessary-type-assertion': [
    'error',
    {
      typesToIgnore: [],
    },
  ],

  // Disallow untyped public methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
  '@typescript-eslint/no-untyped-public-signature': 'off',

  // Disallow Unused Expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // Ensures that TS-specific constructs, such as implemented interfaces, are not erroneously flagged as unused.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  // using no-unused-vars-experimental instead
  '@typescript-eslint/no-unused-vars': 'off',

  // Ensures that TS-specific constructs, such as implemented interfaces, are not erroneously flagged as unused.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  '@typescript-eslint/no-unused-vars-experimental': [
    'error',
    { ignoreArgsIfArgsAfterAreUsed: true, ignoredNamesRegex: '^_' },
  ],

  // Disallow the use of variables before they are defined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  // covered by typescript
  '@typescript-eslint/no-use-before-define': 'off',

  // Disallow unnecessary constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  '@typescript-eslint/no-useless-constructor': ['error'],

  // Disallows the use of require statements except in import statements
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
  // should use `import foo = require('foo');` instead
  '@typescript-eslint/no-var-requires': ['error'],

  // Use for-of loops instead of standard for loops over arrays
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
  '@typescript-eslint/prefer-for-of': ['warn'],

  // Use function types instead of interfaces with call signatures
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
  '@typescript-eslint/prefer-function-type': ['error'],

  // Enforce includes method over indexOf method
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
  '@typescript-eslint/prefer-includes': ['error'],

  // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
  '@typescript-eslint/prefer-namespace-keyword': 'off',

  // Enforce the usage of the nullish coalescing operator instead of logical chaining
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
    },
  ],

  // Prefer using concise optional chain expressions instead of chained logical ands
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
  '@typescript-eslint/prefer-optional-chain': ['error'],

  // Require never-modified private members be marked as
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
  '@typescript-eslint/prefer-readonly': ['error'],

  // Enforce to use RegExp#exec over String#match
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  '@typescript-eslint/prefer-regexp-exec': ['error'],

  // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

  // Functions that return promises must be async
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  '@typescript-eslint/promise-function-async': ['error'],

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: false,
    },
  ],

  // Enforce giving compare argument to Array#sort
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
  '@typescript-eslint/require-array-sort-compare': ['error'],

  // Disallow async functions which have no await expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
  '@typescript-eslint/require-await': ['error'],

  // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
  '@typescript-eslint/restrict-plus-operands': ['error'],

  // Enforce template literal expressions to be of string type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    { allowNumber: true },
  ],

  // Require/Disallow returning awaited values in specific contexts
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],

  // require or disallow semicolons instead of ASI
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  // covered by prettier
  '@typescript-eslint/semi': 'off',

  // Require or disallow a space before function parenthesis
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
  // covered by prettier
  '@typescript-eslint/space-before-function-paren': 'off',

  // Boolean expressions are limited to booleans
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  '@typescript-eslint/strict-boolean-expressions': ['error'],

  // Does not allow the use of /// <reference /> comments.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'never',
      path: 'never',
      types: 'never',
    },
  ],

  // Require type annotations to exist
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
  '@typescript-eslint/typedef': 'off',

  // Require consistent spacing around type annotations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
  // covered by prettier
  '@typescript-eslint/type-annotation-spacing': 'off',

  // Enforces unbound methods are called with their expected scope
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
  '@typescript-eslint/unbound-method': ['error'],

  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
  '@typescript-eslint/unified-signatures': ['error'],
};
export default {
  name: '@typescript-eslint',
  rules: Object.assign(
    rules,
    disabledBaseRules,
    tsEslint.configs['eslint-base'],
  ),
};
