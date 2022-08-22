// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnnecessaryBooleanLiteralCompare0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowComparingNullableBooleansToTrue?: boolean;
        allowComparingNullableBooleansToFalse?: boolean;
      },
    ];

export type NoUnnecessaryBooleanLiteralCompare =
  | 'off'
  | NoUnnecessaryBooleanLiteralCompare0;
