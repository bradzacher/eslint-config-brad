import type { Jest } from '../types/jest/index';

const rules: Jest = {
  // This rule gives you control over the usage of test/it keywords in your codebase
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
  'jest/consistent-test-it': [
    'error',
    {
      fn: 'it',
      withinDescribe: 'it',
    },
  ],

  // Ensure that there is at least one expect call made in a test
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
  'jest/expect-expect': ['error'],

  // Enforces a maximum number assertion calls in a test body
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
  'jest/max-expects': 'off',

  // Enforces a maximum depth to nested describe calls
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
  'jest/max-nested-describe': 'off',

  // Don't use alias methods.
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
  'jest/no-alias-methods': ['error'],

  // Disallow commented out tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
  'jest/no-commented-out-tests': ['warn'],

  // Prevent catch assertions in tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-try-expect.md
  'jest/no-conditional-expect': ['error'],

  // Avoid using a callback in asynchronous tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
  'jest/no-done-callback': ['error'],

  // Disallow use of deprecated functions
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
  'jest/no-deprecated-functions': ['error'],

  // This rule raises a warning about 'skip' tests.
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
  'jest/no-disabled-tests': ['warn'],

  // Disallow duplicate setup and teardown hooks
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
  'jest/no-duplicate-hooks': ['error'],

  // no export from test file
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
  'jest/no-export': ['error'],

  // Disallow conditional logic.
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
  'jest/no-conditional-in-test': ['error'],

  // Disallow 'only' tests.
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
  'jest/no-focused-tests': ['error'],

  // Disallow beforeAll beforeEach afterAll afterEach
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
  'jest/no-hooks': 'off',

  // Having identical titles for two different tests or test suites may create confusion
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
  'jest/no-identical-title': ['error'],

  // Disallow string interpolation inside snapshots
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
  'jest/no-interpolation-in-snapshots': ['error'],

  // Disallow Jasmine globals
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
  'jest/no-jasmine-globals': ['error'],

  // Disallow importing Jest
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jest-import.md
  'jest/no-jest-import': ['error'],

  // disallow large snapshots
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
  'jest/no-large-snapshots': 'off',

  // Disallow manually importing from `__mocks__`
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
  'jest/no-mocks-import': 'off',

  // Disallow specific matchers & modifiers
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
  'jest/no-restricted-matchers': [
    'error',
    {
      resolves: 'Use `expect(await promise)` instead.',
    },
  ],

  // No standalone expect in a describe block
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
  'jest/no-standalone-expect': ['error'],

  // Use .only and .skip over f and x
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
  'jest/no-test-prefixes': ['error'],

  // Disallow explicitly returning from tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
  'jest/no-test-return-statement': ['error'],

  // Suggest using toBeCalledWith OR toHaveBeenCalledWith
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
  'jest/prefer-called-with': ['error'],

  // Suggest using the built-in comparison matchers
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
  'jest/prefer-comparison-matcher': ['error'],

  // Suggest using the built-in equality matchers
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
  'jest/prefer-equality-matcher': ['error'],

  // Suggest using expect.assertions() OR expect.hasAssertions()
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
  // this rule adds no real value
  'jest/prefer-expect-assertions': 'off',

  // Prefer await expect(...).resolves over expect(await ...) syntax
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
  'jest/prefer-expect-resolves': ['error'],

  // Prefer having hooks in a consistent order
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
  'jest/prefer-hooks-in-order': ['warn'],

  // Suggest to have all hooks at top-level before tests
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
  'jest/prefer-hooks-on-top': ['error'],

  // Enforce it, test and describe to have descriptions that begin with a lowercase letter.
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
  'jest/prefer-lowercase-title': [
    'error',
    {
      ignore: ['describe'],
    },
  ],

  // Prefer mock resolved/rejected shorthands for promises
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
  'jest/prefer-mock-promise-shorthand': ['warn'],

  // Prefer including a hint with external snapshots
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
  'jest/prefer-snapshot-hint': ['error'],

  // Suggest using jest.spyOn()
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
  'jest/prefer-spy-on': ['error'],

  // Suggest using toStrictEqual()
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
  'jest/prefer-strict-equal': 'off',

  // Suggest using toBe() for primitive literals
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
  'jest/prefer-to-be': ['error'],

  // Suggest using toContain()
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
  'jest/prefer-to-contain': ['error'],

  // Suggest using toHaveLength()
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
  'jest/prefer-to-have-length': ['error'],

  // Suggest using test.todo
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
  'jest/prefer-todo': ['error'],

  // Require setup and teardown code to be within a hook
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
  'jest/require-hook': 'off',

  // Require a message for toThrow()
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
  'jest/require-to-throw-message': ['error'],

  // Require top-level describe block
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
  'jest/require-top-level-describe': ['error'],

  // Enforce unbound methods are called with their expected scope
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
  'jest/unbound-method': 'off',

  // Enforce valid describe() callback
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
  'jest/valid-describe-callback': ['error'],

  // Enforce valid expect() usage
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
  'jest/valid-expect': ['error'],

  // Enforce having return statement when testing with promises
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
  'jest/valid-expect-in-promise': ['error'],

  // Disallow empty titles
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-empty-title.md
  'jest/valid-title': ['error'],
};

export default {
  name: 'jest',
  rules,
};
