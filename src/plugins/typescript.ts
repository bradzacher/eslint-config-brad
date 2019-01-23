const rules : Rules.TypescriptEslint = {
    // Grouping overloaded members together can improve readability of the code.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': ['error', 'generic'],

    // Enforces that types will not to be used.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': 'error',

    // Enforce camelCase naming convention.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    '@typescript-eslint/camelcase': 'error',

    // This rule enforces PascalCased names for classes and interfaces.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
    '@typescript-eslint/class-name-casing': 'error',

    // Explicit types for function return values makes it clear to any calling code what type is returned.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Leaving off accessibility modifier and making everything public can make your interface hard to use by others
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': 'error',

    // Enforces naming of generic type variables.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
    '@typescript-eslint/generic-type-naming': 'error',

    // Enforce consistent indentation.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/indent': [
        'error',
        4,
        {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
            ],
            ignoreComments: false,
        },
    ],

    // Prefixing interfaces with "I" can help telling them apart at a glance.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
    '@typescript-eslint/interface-name-prefix': ['warn', 'never'],

    // Enforces a consistent member delimiter style in interfaces and type literals.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            multiline: {
                delimiter: 'none',
                requireLast: true,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
        },
    ],

    // It can be helpful to enforce naming conventions for private (and sometimes protected) members of an object.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
    '@typescript-eslint/member-naming': 'off',

    // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
    // classes and class expressions easier to read, navigate and edit.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': 'off',

    // TypeScript disallows the use of <Type> assertions in .tsx because of the similarity with JSX's syntax,
    // which makes it impossible to parse.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-angle-bracket-type-assertion.md
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

    // Use of the Array constructor to construct a new array is generally discouraged in favor of array literal
    // notation because of the single-argument pitfall and because the Array global may be redefined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': 'error',

    // This rule aims to ensure that only meaningful interfaces are declared in the code
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    // disabled as it's perfectly reasonable to have empty props type for a react component
    '@typescript-eslint/no-empty-interface': 'off',

    // This rule goes doesn't allow any types to be defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    '@typescript-eslint/no-explicit-any': 'warn',

    // Forbids the use of classes as namespaces.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'warn',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': 'error',

    // Enforce valid definition of new and constructor.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': 'error',

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
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Forbids an object literal to appear in a type assertion expression.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
    '@typescript-eslint/no-object-literal-type-assertion': 'error',

    // This rule disallows the use of parameter properties in constructors,
    // forcing the user to explicitly declare all properties in the class.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'error',

    // Disallow aliasing this.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    '@typescript-eslint/no-this-alias': 'warn',

    // Does not allow the use of /// <reference /> comments.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-triple-slash-reference.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    '@typescript-eslint/no-triple-slash-reference': 'warn',

    // Disallow the use of type aliases
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    '@typescript-eslint/no-type-alias': 'off',

    // Ensures that TS-specific constructs, such as implemented interfaces, are not erroneously flagged as unused.
    // This rule only has an effect when the no-unused-vars core rule is enabled
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': 'error',

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 'off', // TODO - enable this, maybe?

    // Prefer an interface declaration over a type literal (type T = { ... }).
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
    '@typescript-eslint/prefer-interface': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    '@typescript-eslint/restrict-plus-operands': 'off', // TODO - turn this on

    // Require consistent spacing around type annotations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
}

export default {
    name: '@typescript-eslint',
    rules,
}
