// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoBaseToString0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoredTypeNames?: string[];
      },
    ];

export type NoBaseToString = 'off' | NoBaseToString0;
