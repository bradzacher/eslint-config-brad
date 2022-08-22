// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NewlineAfterImport0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        count?: number;
      },
    ];

export type NewlineAfterImport = 'off' | NewlineAfterImport0;
