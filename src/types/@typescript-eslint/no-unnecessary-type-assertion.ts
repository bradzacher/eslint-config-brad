// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnnecessaryTypeAssertion0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        typesToIgnore?: string[];
        [k: string]: unknown;
      },
    ];

export type NoUnnecessaryTypeAssertion = 'off' | NoUnnecessaryTypeAssertion0;
