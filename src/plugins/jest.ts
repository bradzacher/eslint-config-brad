const rules : Rules.Jest = {
    // This rule gives you control over the usage of test/it keywords in your codebase
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': [
        'error',
        {
            fn: 'it',
            withinDescribe: 'it',
        },
    ],

    // Ensure that there is at least one expect call made in a test
    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/expect-expect.md
    'jest/expect-expect': 'error',

    // Enforce it, test and describe to have descriptions that begin with a lowercase letter.
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    'jest/lowercase-name': [
        'error',
        {
            ignore: ['describe'],
        },
    ],

    // Don't use alias methods.
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'error',

    // This rule raises a warning about 'skip' tests.
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'warn',

    // Disallow empty titles
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-empty-title.md
    'jest/no-empty-title': 'error',

    // Avoid using a callback in asynchronous tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
    'jest/no-test-callback': 'error',

    // Disallow 'only' tests.
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // Disallow beforeAll beforeEach afterAll afterEach
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // Having identical titles for two different tests or test suites may create confusion
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // Disallow Jasmine globals
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',

    // Disallow importing Jest
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',

    // disallow large snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': 'off',

    // Disallow manually importing from `__mocks__`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'off',

    // Use .only and .skip over f and x
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // Disallow explicitly returning from tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'error',

    // Disallow using toBeTruthy() & toBeFalsy()
    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-truthy-falsy.md
    'jest/no-truthy-falsy': 'off',

    // Suggest using toBeCalledWith OR toHaveBeenCalledWith
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',

    // Suggest using expect.assertions() OR expect.hasAssertions()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    // this rule adds no real value
    'jest/prefer-expect-assertions': 'off',

    // Suggest using inline snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    'jest/prefer-inline-snapshots': 'off',

    // Suggest using jest.spyOn()
    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',

    // Suggest using toStrictEqual()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'off',

    // Suggest using toContain()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // Suggest using toBeNull()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',

    // Suggest using toBeUndefined()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',

    // Suggest using toHaveLength()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // Suggest using test.todo
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'error',

    // Require a message for toThrow()
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
    'jest/require-tothrow-message': 'error',

    // Enforce valid describe() callback
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    'jest/valid-describe': 'error',

    // Enforce valid expect() usage
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // Enforce having return statement when testing with promises
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',
}

export default {
    name: 'jest',
    rules,
}
