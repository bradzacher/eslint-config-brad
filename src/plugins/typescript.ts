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

  // Bans // @ts-<directive> comments from being used or requires descriptions after directive
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-check': false,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      minimumDescriptionLength: 5,
    },
  ],

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

  // Ensures that literals on classes are exposed in a consistent style
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

  // Enforces consistent spacing before and after commas
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
  '@typescript-eslint/comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],

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

  // Enforce default parameters to be last
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
  '@typescript-eslint/default-param-last': ['error'],

  // enforce dot notation whenever possible
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
  // we don't need the type-checked version
  '@typescript-eslint/dot-notation': 'off',

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

  // Require explicit return and argument types on exported functions' and classes' public class methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
  // we use explicit-function-return-type and noImplicitAny instead
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  // require or disallow spacing between function identifiers and their invocations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  // covered by prettier
  '@typescript-eslint/func-call-spacing': ['off', 'never'],

  // Enforce consistent indentation.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  // covered by prettier
  '@typescript-eslint/indent': 'off',

  // require or disallow initialization in variable declarations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
  '@typescript-eslint/init-declarations': 'off',

  // Enforce consistent spacing before and after keywords
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
  // covered by prettier
  '@typescript-eslint/keyword-spacing': 'off',

  // Require or disallow an empty line between class members
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
  '@typescript-eslint/lines-between-class-members': 'off',

  // Enforces a consistent member delimiter style in interfaces and type literals.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  // covered by prettier
  '@typescript-eslint/member-delimiter-style': 'off',

  // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
  // classes and class expressions easier to read, navigate and edit.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
  '@typescript-eslint/member-ordering': 'off',

  // Enforces using a particular method signature syntax
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
  '@typescript-eslint/method-signature-style': ['error', 'property'],

  // Enforces naming conventions for everything across a codebase
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
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

  // Use of the Array constructor to construct a new array is generally discouraged in favour of array literal
  // notation because of the single-argument pitfall and because the Array global may be redefined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  '@typescript-eslint/no-array-constructor': ['error'],

  // Requires that .toString() is only called on objects which provide useful information when stringified
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
  '@typescript-eslint/no-base-to-string': 'off',

  // Disallow duplicate class members
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
  // covered by typescript
  '@typescript-eslint/no-dupe-class-members': 'off',

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

  // Disallow unnecessary semicolons
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  // covered by prettier
  '@typescript-eslint/no-extra-semi': 'off',

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
      ignoreVoid: true,
    },
  ],

  // Disallow iterating over an array with a for-in loop
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  '@typescript-eslint/no-for-in-array': ['error'],

  // Disallow the use of eval()-like methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
  '@typescript-eslint/no-implied-eval': ['error'],

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: true,
      ignoreProperties: true,
    },
  ],

  // disallow this keywords outside of classes or class-like objects
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
  '@typescript-eslint/no-invalid-this': 'off',

  // Disallows usage of void type outside of generic or return types
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
  '@typescript-eslint/no-invalid-void-type': ['error'],

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

  // Disallows using a non-null assertion after an optional chain expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

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

  // Disallow throwing literals as exceptions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
  '@typescript-eslint/no-throw-literal': ['error'],

  // Disallow the use of type aliases
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
  '@typescript-eslint/no-type-alias': 'off',

  // Flags unnecessary equality comparisons against boolean literals
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

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

  // Disallows assigning any to variables and properties
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
  '@typescript-eslint/no-unsafe-assignment': ['error'],

  // Disallows calling an any type value
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
  '@typescript-eslint/no-unsafe-call': ['error'],

  // Disallows member access on any typed variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
  '@typescript-eslint/no-unsafe-member-access': ['error'],

  // Disallows returning any from a function
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
  '@typescript-eslint/no-unsafe-return': ['error'],

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

  // Prefer usage of as const over literal type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
  '@typescript-eslint/prefer-as-const': ['error'],

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

  // Prefer using concise optional chain expressions instead of chained logical and
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
  '@typescript-eslint/prefer-optional-chain': ['error'],

  // Require never-modified private members be marked as
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
  '@typescript-eslint/prefer-readonly': ['error'],

  // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Prefer using type parameter when calling Array#reduce instead of casting
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
  '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

  // Enforce to use RegExp#exec over String#match
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  '@typescript-eslint/prefer-regexp-exec': ['error'],

  // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

  // Recommends using // @ts-expect-error over // @ts-ignore
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
  '@typescript-eslint/prefer-ts-expect-error': ['error'],

  // Functions that return promises must be async
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  '@typescript-eslint/promise-function-async': ['error'],

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  // covered by prettier
  '@typescript-eslint/quotes': 'off',

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

  // Exhaustiveness checking in switch with union type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
  '@typescript-eslint/switch-exhaustiveness-check': ['error'],

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
