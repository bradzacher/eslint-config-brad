// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnsafeOptionalChaining0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        disallowArithmeticOperators?: boolean;
      },
    ];

export type NoUnsafeOptionalChaining = 'off' | NoUnsafeOptionalChaining0;
