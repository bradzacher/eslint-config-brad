import { Jest } from '../types/jest';

const rules: Jest = {
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
  'jest/expect-expect': ['error'],

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
  'jest/no-alias-methods': ['error'],

  // Disallow commented out tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
  'jest/no-commented-out-tests': ['warn'],

  // Disallow use of deprecated functions
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md
  'jest/no-deprecated-functions': ['error'],

  // This rule raises a warning about 'skip' tests.
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
  'jest/no-disabled-tests': ['warn'],

  // Disallow duplicate setup and teardown hooks
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
  'jest/no-duplicate-hooks': ['error'],

  // no export from test file
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
  'jest/no-export': ['error'],

  // Disallow conditional logic.
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
  'jest/no-if': ['error'],

  // Avoid using a callback in asynchronous tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
  'jest/no-test-callback': ['error'],

  // Disallow 'only' tests.
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
  'jest/no-focused-tests': ['error'],

  // Disallow beforeAll beforeEach afterAll afterEach
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
  'jest/no-hooks': 'off',

  // Having identical titles for two different tests or test suites may create confusion
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
  'jest/no-identical-title': ['error'],

  // Disallow Jasmine globals
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
  'jest/no-jasmine-globals': ['error'],

  // Disallow importing Jest
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
  'jest/no-jest-import': ['error'],

  // disallow large snapshots
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
  'jest/no-large-snapshots': 'off',

  // Disallow manually importing from `__mocks__`
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
  'jest/no-mocks-import': 'off',

  // Disallow specific matchers & modifiers
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md
  'jest/no-restricted-matchers': [
    'error',
    {
      resolves: 'Use `expect(await promise)` instead.',
    },
  ],

  // No standalone expect in a describe block
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
  'jest/no-standalone-expect': ['error'],

  // Use .only and .skip over f and x
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
  'jest/no-test-prefixes': ['error'],

  // Disallow explicitly returning from tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-return-statement.md
  'jest/no-test-return-statement': ['error'],

  // Prevent catch assertions in tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-try-expect.md
  'jest/no-try-expect': ['error'],

  // Suggest using toBeCalledWith OR toHaveBeenCalledWith
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
  'jest/prefer-called-with': ['error'],

  // Suggest using expect.assertions() OR expect.hasAssertions()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
  // this rule adds no real value
  'jest/prefer-expect-assertions': 'off',

  // Suggest to have all hooks at top-level before tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
  'jest/prefer-hooks-on-top': ['error'],

  // Suggest using jest.spyOn()
  // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-spy-on.md
  'jest/prefer-spy-on': ['error'],

  // Suggest using toStrictEqual()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
  'jest/prefer-strict-equal': 'off',

  // Suggest using toContain()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
  'jest/prefer-to-contain': ['error'],

  // Suggest using toBeNull()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
  'jest/prefer-to-be-null': ['error'],

  // Suggest using toBeUndefined()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
  'jest/prefer-to-be-undefined': ['error'],

  // Suggest using toHaveLength()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
  'jest/prefer-to-have-length': ['error'],

  // Suggest using test.todo
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
  'jest/prefer-todo': ['error'],

  // Require a message for toThrow()
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md
  'jest/require-to-throw-message': ['error'],

  // Require top-level describe block
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
  'jest/require-top-level-describe': ['error'],

  // Enforce valid describe() callback
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
  'jest/valid-describe': ['error'],

  // Enforce valid expect() usage
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
  'jest/valid-expect': ['error'],

  // Enforce having return statement when testing with promises
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
  'jest/valid-expect-in-promise': ['error'],

  // Disallow empty titles
  // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-empty-title.md
  'jest/valid-title': ['error'],
};

export default {
  name: 'jest',
  rules,
};
