const rules: Rules.Typescript = {
    // Grouping overloaded members together can improve readability of the code.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/adjacent-overload-signatures.md
    'typescript/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/array-type.md
    'typescript/array-type': 'error',

    // Enforces that types will not to be used.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/ban-types.md
    'typescript/ban-types': 'error',

    // Enforce camelCase naming convention.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/camelcase.md
    'typescript/camelcase': 'error',

    // This rule enforces PascalCased names for classes and interfaces.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/class-name-casing.md
    'typescript/class-name-casing': 'error',

    // Explicit types for function return values makes it clear to any calling code what type is returned.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/explicit-function-return-type.md
    'typescript/explicit-function-return-type': 'off',

    // Leaving off accessibility modifier and making everything public can make your interface hard to use by others
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/explicit-member-accessibility.md
    'typescript/explicit-member-accessibility': 'error',

    // Enforces naming of generic type variables.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/generic-type-naming.md
    'typescript/generic-type-naming': 'error',

    // Enforce consistent indentation.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/indent.md
    'typescript/indent': [
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
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/interface-name-prefix.md
    'typescript/interface-name-prefix': ['warn', 'never'],

    // Enforces a consistent member delimiter style in interfaces and type literals.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/member-delimiter-style.md
    'typescript/member-delimiter-style': [
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
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/member-naming.md
    'typescript/member-naming': 'off',

    // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
    // classes and class expressions easier to read, navigate and edit.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/member-ordering.md
    'typescript/member-ordering': 'off',

    // TypeScript disallows the use of <Type> assertions in .tsx because of the similarity with JSX's syntax,
    // which makes it impossible to parse.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-angle-bracket-type-assertion.md
    'typescript/no-angle-bracket-type-assertion': 'error',

    // Use of the Array constructor to construct a new array is generally discouraged in favor of array literal
    // notation because of the single-argument pitfall and because the Array global may be redefined
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-array-constructor.md
    'typescript/no-array-constructor': 'error',

    // This rule aims to ensure that only meaningful interfaces are declared in the code
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-empty-interface.md
    // disabled as it's perfectly reasonable to have empty props type for a react component
    'typescript/no-empty-interface': 'off',

    // This rule goes doesn't allow any types to be defined
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-explicit-any.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    'typescript/no-explicit-any': 'warn',

    // Forbids the use of classes as namespaces.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-extraneous-class.md
    'typescript/no-extraneous-class': 'warn',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-inferrable-types.md
    'typescript/no-inferrable-types': 'error',

    // Enforce valid definition of new and constructor.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-misused-new.md
    'typescript/no-misused-new': 'error',

    // This rule aims to standardise the way modules are declared
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-namespace.md
    'typescript/no-namespace': [
        'error',
        {
            allowDeclarations: false,
            allowDefinitionFiles: true,
        },
    ],

    // Using non-null assertions cancels the benefits of the strict null-checking mode
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-non-null-assertion.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    'typescript/no-non-null-assertion': 'warn',

    // Forbids an object literal to appear in a type assertion expression.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-object-literal-type-assertion.md
    'typescript/no-object-literal-type-assertion': 'error',

    // This rule disallows the use of parameter properties in constructors,
    // forcing the user to explicitly declare all properties in the class.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-parameter-properties.md
    'typescript/no-parameter-properties': 'error',

    // Disallow aliasing this.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-this-alias.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    'typescript/no-this-alias': 'warn',

    // Does not allow the use of /// <reference /> comments.
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-triple-slash-reference.md
    // warn discourage it - it can be specifically disabled in code if there's a valid use case
    'typescript/no-triple-slash-reference': 'warn',

    // Disallow the use of type aliases
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-type-alias.md
    'typescript/no-type-alias': 'off',

    // Ensures that TS-specific constructs, such as implemented interfaces, are not erroneously flagged as unused.
    // This rule only has an effect when the no-unused-vars core rule is enabled
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
    'typescript/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-use-before-define.md
    'typescript/no-use-before-define': 'error',

    // Disallows the use of require statements except in import statements
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-var-requires.md
    'typescript/no-var-requires': 'off', // TODO - enable this, maybe?

    // Prefer an interface declaration over a type literal (type T = { ... }).
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/prefer-interface.md
    'typescript/prefer-interface': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/prefer-namespace-keyword.md
    'typescript/prefer-namespace-keyword': 'off',

    // Require consistent spacing around type annotations
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/type-annotation-spacing.md
    'typescript/type-annotation-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
}

export default {
    name: 'typescript',
    rules,
}
