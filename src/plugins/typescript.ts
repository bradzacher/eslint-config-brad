import tsEslint from '@typescript-eslint/eslint-plugin';

import type { TypescriptEslint } from '../types/@typescript-eslint/index';

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
  // https://typescript-eslint.io/rules/adjacent-overload-signatures
  '@typescript-eslint/adjacent-overload-signatures': ['error'],

  // Requires using either T[] or Array<T> for arrays.
  // https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'generic',
    },
  ],

  // Disallows awaiting a value that is not a Promise
  // https://typescript-eslint.io/rules/await-thenable
  '@typescript-eslint/await-thenable': ['error'],

  // Bans // @ts-<directive> comments from being used or requires descriptions after directive
  // https://typescript-eslint.io/rules/ban-ts-comment
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

  // Bans // tslint:<rule-flag> comments from being used
  // https://typescript-eslint.io/rules/ban-tslint-comment
  '@typescript-eslint/ban-tslint-comment': ['error'],

  // Enforces that types will not to be used.
  // https://typescript-eslint.io/rules/ban-types
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
  // https://typescript-eslint.io/rules/brace-style
  // covered by prettier
  '@typescript-eslint/brace-style': 'off',

  // Ensures that literals on classes are exposed in a consistent style
  // https://typescript-eslint.io/rules/class-literal-property-style
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

  // This rule enforces consistent use of trailing commas in object and array literals.
  // https://typescript-eslint.io/rules/comma-dangle
  // covered by prettier
  '@typescript-eslint/comma-dangle': 'off',

  // Enforces consistent spacing before and after commas
  // https://typescript-eslint.io/rules/comma-spacing
  '@typescript-eslint/comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],

  // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
  // https://typescript-eslint.io/rules/consistent-generic-constructors
  '@typescript-eslint/consistent-generic-constructors': ['error'],

  // Require or disallow the Record type.
  // https://typescript-eslint.io/rules/consistent-indexed-object-style
  '@typescript-eslint/consistent-indexed-object-style': ['warn'],

  // Enforces consistent usage of type assertions.
  // https://typescript-eslint.io/rules/consistent-type-assertions
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'never',
    },
  ],

  // Consistent with type definition either interface or type.
  // https://typescript-eslint.io/rules/consistent-type-definitions
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

  // Enforce consistent usage of type exports.
  // https://typescript-eslint.io/rules/consistent-type-exports
  '@typescript-eslint/consistent-type-exports': ['error'],

  // Enforces consistent usage of type imports
  // https://typescript-eslint.io/rules/consistent-type-imports
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: true,
      prefer: 'type-imports',
    },
  ],

  // Enforce default parameters to be last
  // https://typescript-eslint.io/rules/default-param-last
  '@typescript-eslint/default-param-last': ['error'],

  // enforce dot notation whenever possible
  // https://typescript-eslint.io/rules/dot-notation
  // we don't need the type-checked version
  '@typescript-eslint/dot-notation': 'off',

  // Explicit types for function return values makes it clear to any calling code what type is returned.
  // https://typescript-eslint.io/rules/explicit-function-return-type
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowDirectConstAssertionInArrowFunctions: true,
    },
  ],

  // Leaving off accessibility modifier and making everything public can make your interface hard to use by others
  // https://typescript-eslint.io/rules/explicit-member-accessibility
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
    },
  ],

  // Require explicit return and argument types on exported functions' and classes' public class methods
  // https://typescript-eslint.io/rules/explicit-module-boundary-types
  // we use explicit-function-return-type and noImplicitAny instead
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  // require or disallow spacing between function identifiers and their invocations
  // https://typescript-eslint.io/rules/func-call-spacing
  // covered by prettier
  '@typescript-eslint/func-call-spacing': ['off', 'never'],

  // Enforce consistent indentation.
  // https://typescript-eslint.io/rules/indent
  // covered by prettier
  '@typescript-eslint/indent': 'off',

  // require or disallow initialization in variable declarations
  // https://typescript-eslint.io/rules/init-declarations
  '@typescript-eslint/init-declarations': 'off',

  // Enforce consistent spacing before and after keywords
  // https://typescript-eslint.io/rules/keyword-spacing
  // covered by prettier
  '@typescript-eslint/keyword-spacing': 'off',

  // Require or disallow an empty line between class members
  // https://typescript-eslint.io/rules/lines-between-class-members
  '@typescript-eslint/lines-between-class-members': 'off',

  // Enforces a consistent member delimiter style in interfaces and type literals.
  // https://typescript-eslint.io/rules/member-delimiter-style
  // covered by prettier
  '@typescript-eslint/member-delimiter-style': 'off',

  // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
  // classes and class expressions easier to read, navigate and edit.
  // https://typescript-eslint.io/rules/member-ordering
  '@typescript-eslint/member-ordering': 'off',

  // Enforces using a particular method signature syntax
  // https://typescript-eslint.io/rules/method-signature-style
  '@typescript-eslint/method-signature-style': ['error', 'property'],

  // Enforces naming conventions for everything across a codebase
  // https://typescript-eslint.io/rules/naming-convention
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
      selector: 'parameter',
      format: ['camelCase'],
      // to allow unused parameters
      leadingUnderscore: 'allow',
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
  // https://typescript-eslint.io/rules/no-array-constructor
  '@typescript-eslint/no-array-constructor': ['error'],

  // Requires that .toString() is only called on objects which provide useful information when stringified
  // https://typescript-eslint.io/rules/no-base-to-string
  '@typescript-eslint/no-base-to-string': 'off',

  // Disallow non-null assertion in locations that may be confusing
  // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
  '@typescript-eslint/no-confusing-non-null-assertion': ['error'],

  // Require expressions of type void to appear in statement position.
  // https://typescript-eslint.io/rules/no-confusing-void-expression
  '@typescript-eslint/no-confusing-void-expression': ['error'],

  // Disallow duplicate class members
  // https://typescript-eslint.io/rules/no-dupe-class-members
  // covered by typescript
  '@typescript-eslint/no-dupe-class-members': 'off',

  // Disallow duplicate enum member values
  // https://typescript-eslint.io/rules/no-duplicate-enum-values
  '@typescript-eslint/no-duplicate-enum-values': ['error'],

  // Disallow the delete operator with computed key expressions
  // https://typescript-eslint.io/rules/no-dynamic-delete
  '@typescript-eslint/no-dynamic-delete': 'off',

  // Disallow Empty Functions
  // https://typescript-eslint.io/rules/no-empty-function
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: ['private-constructors', 'protected-constructors'],
    },
  ],

  // This rule aims to ensure that only meaningful interfaces are declared in the code
  // https://typescript-eslint.io/rules/no-empty-interface
  '@typescript-eslint/no-empty-interface': ['error'],

  // This rule goes doesn't allow any types to be defined
  // https://typescript-eslint.io/rules/no-explicit-any
  '@typescript-eslint/no-explicit-any': [
    'error',
    {
      fixToUnknown: true,
      ignoreRestArgs: false,
    },
  ],

  // Disallow extra non-null assertion
  // https://typescript-eslint.io/rules/no-extra-non-null-assertion
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],

  // disallow unnecessary parentheses
  // https://typescript-eslint.io/rules/no-extra-parens
  // covered by prettier
  '@typescript-eslint/no-extra-parens': 'off',

  // Disallow unnecessary semicolons
  // https://typescript-eslint.io/rules/no-extra-semi
  // covered by prettier
  '@typescript-eslint/no-extra-semi': 'off',

  // Forbids the use of classes as namespaces.
  // https://typescript-eslint.io/rules/no-extraneous-class
  '@typescript-eslint/no-extraneous-class': [
    'warn',
    {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
    },
  ],

  // Requires Promise-like values to be handled appropriately
  // https://typescript-eslint.io/rules/no-floating-promises
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: true,
    },
  ],

  // Disallow iterating over an array with a for-in loop
  // https://typescript-eslint.io/rules/no-for-in-array
  '@typescript-eslint/no-for-in-array': ['error'],

  // Disallow the use of eval()-like methods
  // https://typescript-eslint.io/rules/no-implied-eval
  '@typescript-eslint/no-implied-eval': ['error'],

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  // https://typescript-eslint.io/rules/no-inferrable-types
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: true,
      ignoreProperties: true,
    },
  ],

  // disallow this keywords outside of classes or class-like objects
  // https://typescript-eslint.io/rules/no-invalid-this
  '@typescript-eslint/no-invalid-this': 'off',

  // Disallows usage of void type outside of generic or return types
  // https://typescript-eslint.io/rules/no-invalid-void-type
  '@typescript-eslint/no-invalid-void-type': ['error'],

  // Disallow function declarations that contain unsafe references inside loop statements
  // https://typescript-eslint.io/rules/no-loop-func
  '@typescript-eslint/no-loop-func': ['error'],

  // Disallow literal numbers that lose precision
  // https://typescript-eslint.io/rules/no-loss-of-precision
  '@typescript-eslint/no-loss-of-precision': ['error'],

  // Disallow Magic Numbers
  // https://typescript-eslint.io/rules/no-magic-numbers
  '@typescript-eslint/no-magic-numbers': 'off',

  // Disallow the void operator except when used to discard a value.
  // https://typescript-eslint.io/rules/no-meaningless-void-operator
  '@typescript-eslint/no-meaningless-void-operator': ['error'],

  // Enforce valid definition of new and constructor.
  // https://typescript-eslint.io/rules/no-misused-new
  '@typescript-eslint/no-misused-new': ['error'],

  // Avoid using promises in places not designed to handle them
  // https://typescript-eslint.io/rules/no-misused-promises
  '@typescript-eslint/no-misused-promises': ['error'],

  // This rule aims to standardise the way modules are declared
  // https://typescript-eslint.io/rules/no-namespace
  '@typescript-eslint/no-namespace': [
    'error',
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],

  // Disallow non-null assertions in the left operand of a nullish coalescing operator.
  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],

  // Disallows using a non-null assertion after an optional chain expression
  // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

  // Using non-null assertions cancels the benefits of the strict null-checking mode
  // https://typescript-eslint.io/rules/no-non-null-assertion
  // warn discourage it - it can be specifically disabled in code if there's a valid use case
  '@typescript-eslint/no-non-null-assertion': ['warn'],

  // Disallow variable redeclaration
  // https://typescript-eslint.io/rules/no-redeclare
  // covered by typescript
  '@typescript-eslint/no-redeclare': 'off',

  // Disallow members of unions and intersections that do nothing or override type information.
  // https://typescript-eslint.io/rules/no-redundant-type-constituents
  '@typescript-eslint/no-redundant-type-constituents': ['warn'],

  // Disallows invocation of require()
  // https://typescript-eslint.io/rules/no-require-imports
  '@typescript-eslint/no-require-imports': 'off',

  // Disallow specified modules when loaded by import.
  // https://typescript-eslint.io/rules/no-restricted-imports
  '@typescript-eslint/no-restricted-imports': 'off',

  // Disallow variable declarations from shadowing variables declared in the outer scope
  // https://typescript-eslint.io/rules/no-shadow
  '@typescript-eslint/no-shadow': ['error'],

  // Disallow aliasing this.
  // https://typescript-eslint.io/rules/no-this-alias
  // warn discourage it - it can be specifically disabled in code if there's a valid use case
  '@typescript-eslint/no-this-alias': [
    'warn',
    {
      allowDestructuring: false,
      allowedNames: [],
    },
  ],

  // Disallow throwing literals as exceptions
  // https://typescript-eslint.io/rules/no-throw-literal
  '@typescript-eslint/no-throw-literal': ['error'],

  // Disallow the use of type aliases
  // https://typescript-eslint.io/rules/no-type-alias
  '@typescript-eslint/no-type-alias': 'off',

  // Flags unnecessary equality comparisons against boolean literals
  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

  // Condition expressions must be necessary
  // https://typescript-eslint.io/rules/no-unnecessary-condition
  '@typescript-eslint/no-unnecessary-condition': [
    'error',
    { allowConstantLoopConditions: true },
  ],

  // Warns when a namespace qualifier is unnecessary
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier
  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  // Warns if an explicitly specified type argument is the default for that type parameter
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  // Warns if a type assertion does not change the type of an expression
  // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
  '@typescript-eslint/no-unnecessary-type-assertion': [
    'error',
    {
      typesToIgnore: [],
    },
  ],

  // Disallow unnecessary constraints on generic types.
  // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
  '@typescript-eslint/no-unnecessary-type-constraint': ['error'],

  // Disallow calling a function with a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-argument
  '@typescript-eslint/no-unsafe-argument': ['error'],

  // Disallows assigning any to variables and properties
  // https://typescript-eslint.io/rules/no-unsafe-assignment
  '@typescript-eslint/no-unsafe-assignment': ['error'],

  // Disallows calling an any type value
  // https://typescript-eslint.io/rules/no-unsafe-call
  '@typescript-eslint/no-unsafe-call': ['error'],

  // Disallows member access on any typed variables
  // https://typescript-eslint.io/rules/no-unsafe-member-access
  '@typescript-eslint/no-unsafe-member-access': ['error'],

  // Disallows returning any from a function
  // https://typescript-eslint.io/rules/no-unsafe-return
  '@typescript-eslint/no-unsafe-return': ['error'],

  // Disallow Unused Expressions
  // https://typescript-eslint.io/rules/no-unused-expressions
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // Ensures that TS-specific constructs, such as implemented interfaces, are not erroneously flagged as unused.
  // https://typescript-eslint.io/rules/no-unused-vars
  // using no-unused-vars-experimental instead
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: undefined,
      ignoreRestSiblings: true,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],

  // Disallow the use of variables before they are defined
  // https://typescript-eslint.io/rules/no-use-before-define
  // covered by typescript
  '@typescript-eslint/no-use-before-define': 'off',

  // Disallow unnecessary constructors
  // https://typescript-eslint.io/rules/no-useless-constructor
  '@typescript-eslint/no-useless-constructor': ['error'],

  // Disallow empty exports that don't change anything in a module file.
  // https://typescript-eslint.io/rules/no-useless-empty-export
  '@typescript-eslint/no-useless-empty-export': ['error'],

  // Disallows the use of require statements except in import statements
  // https://typescript-eslint.io/rules/no-var-requires
  // should use `import foo = require('foo');` instead
  '@typescript-eslint/no-var-requires': ['error'],

  // Enforce non-null assertions over explicit type casts.
  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
  '@typescript-eslint/non-nullable-type-assertion-style': ['error'],

  // Enforce consistent spacing inside braces.
  // https://typescript-eslint.io/rules/object-curly-spacing
  // covered by prettier
  '@typescript-eslint/object-curly-spacing': 'off',

  // Require or disallow padding lines between statements.
  // https://typescript-eslint.io/rules/padding-line-between-statements
  // covered by prettier
  '@typescript-eslint/padding-line-between-statements': 'off',

  // Require or disallow parameter properties in class constructors.
  // https://typescript-eslint.io/rules/parameter-properties
  '@typescript-eslint/parameter-properties': [
    'error',
    { prefer: 'parameter-property' },
  ],

  // Prefer usage of as const over literal type
  // https://typescript-eslint.io/rules/prefer-as-const
  '@typescript-eslint/prefer-as-const': ['error'],

  // Prefer initializing each enums member value
  // https://typescript-eslint.io/rules/prefer-enum-initializers
  // don't care about this
  '@typescript-eslint/prefer-enum-initializers': ['error'],

  // Use for-of loops instead of standard for loops over arrays
  // https://typescript-eslint.io/rules/prefer-for-of
  '@typescript-eslint/prefer-for-of': ['warn'],

  // Use function types instead of interfaces with call signatures
  // https://typescript-eslint.io/rules/prefer-function-type
  '@typescript-eslint/prefer-function-type': ['error'],

  // Enforce includes method over indexOf method
  // https://typescript-eslint.io/rules/prefer-includes
  '@typescript-eslint/prefer-includes': ['error'],

  // Require that all enum members be literal values to prevent unintended enum member name shadow issues
  // https://typescript-eslint.io/rules/prefer-literal-enum-member
  '@typescript-eslint/prefer-literal-enum-member': ['error'],

  // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
  // https://typescript-eslint.io/rules/prefer-namespace-keyword
  '@typescript-eslint/prefer-namespace-keyword': 'off',

  // Enforce the usage of the nullish coalescing operator instead of logical chaining
  // https://typescript-eslint.io/rules/prefer-nullish-coalescing
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
    },
  ],

  // Prefer using concise optional chain expressions instead of chained logical and
  // https://typescript-eslint.io/rules/prefer-optional-chain
  '@typescript-eslint/prefer-optional-chain': ['error'],

  // Require never-modified private members be marked as
  // https://typescript-eslint.io/rules/prefer-readonly
  '@typescript-eslint/prefer-readonly': ['error'],

  // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Prefer using type parameter when calling Array#reduce instead of casting
  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
  '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

  // Enforce to use RegExp#exec over String#match
  // https://typescript-eslint.io/rules/prefer-regexp-exec
  '@typescript-eslint/prefer-regexp-exec': ['error'],

  // Enforce that this is used when only this type is returned.
  // https://typescript-eslint.io/rules/prefer-return-this-type
  '@typescript-eslint/prefer-return-this-type': ['error'],

  // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
  '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

  // Recommends using // @ts-expect-error over // @ts-ignore
  // https://typescript-eslint.io/rules/prefer-ts-expect-error
  '@typescript-eslint/prefer-ts-expect-error': ['error'],

  // Functions that return promises must be async
  // https://typescript-eslint.io/rules/promise-function-async
  '@typescript-eslint/promise-function-async': ['error'],

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://typescript-eslint.io/rules/quotes
  // covered by prettier
  '@typescript-eslint/quotes': 'off',

  // Enforce giving compare argument to Array#sort
  // https://typescript-eslint.io/rules/require-array-sort-compare
  '@typescript-eslint/require-array-sort-compare': ['error'],

  // Disallow async functions which have no await expression
  // https://typescript-eslint.io/rules/require-await
  '@typescript-eslint/require-await': ['error'],

  // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
  // https://typescript-eslint.io/rules/restrict-plus-operands
  '@typescript-eslint/restrict-plus-operands': ['error'],

  // Enforce template literal expressions to be of string type
  // https://typescript-eslint.io/rules/restrict-template-expressions
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    { allowNumber: true },
  ],

  // Require/Disallow returning awaited values in specific contexts
  // https://typescript-eslint.io/rules/return-await
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],

  // require or disallow semicolons instead of ASI
  // https://typescript-eslint.io/rules/semi
  // covered by prettier
  '@typescript-eslint/semi': 'off',

  // Enforce members of a type union/intersection to be sorted alphabetically.
  // https://typescript-eslint.io/rules/sort-type-union-intersection-members
  '@typescript-eslint/sort-type-union-intersection-members': 'off',

  // Enforce consistent spacing before blocks.
  // https://typescript-eslint.io/rules/space-before-blocks
  // covered by prettier
  '@typescript-eslint/space-before-blocks': 'off',

  // Require or disallow a space before function parenthesis
  // https://typescript-eslint.io/rules/space-before-function-paren
  // covered by prettier
  '@typescript-eslint/space-before-function-paren': 'off',

  // Require spacing around infix operators.
  // https://typescript-eslint.io/rules/space-infix-ops
  // covered by prettier
  '@typescript-eslint/space-infix-ops': 'off',

  // Boolean expressions are limited to booleans
  // https://typescript-eslint.io/rules/strict-boolean-expressions
  '@typescript-eslint/strict-boolean-expressions': ['error'],

  // Exhaustiveness checking in switch with union type
  // https://typescript-eslint.io/rules/switch-exhaustiveness-check
  '@typescript-eslint/switch-exhaustiveness-check': ['error'],

  // Does not allow the use of /// <reference /> comments.
  // https://typescript-eslint.io/rules/triple-slash-reference
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'never',
      path: 'never',
      types: 'never',
    },
  ],

  // Require type annotations to exist
  // https://typescript-eslint.io/rules/typedef
  '@typescript-eslint/typedef': 'off',

  // Require consistent spacing around type annotations
  // https://typescript-eslint.io/rules/type-annotation-spacing
  // covered by prettier
  '@typescript-eslint/type-annotation-spacing': 'off',

  // Enforces unbound methods are called with their expected scope
  // https://typescript-eslint.io/rules/unbound-method
  '@typescript-eslint/unbound-method': ['error'],

  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
  // https://typescript-eslint.io/rules/unified-signatures
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
