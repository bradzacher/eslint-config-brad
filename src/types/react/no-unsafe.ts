// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnsafe0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkAliases?: boolean;
      },
    ];

export type NoUnsafe = 'off' | NoUnsafe0;
