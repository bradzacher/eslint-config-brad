// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMultipleEmptyLines0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      },
    ];

export type NoMultipleEmptyLines = 'off' | NoMultipleEmptyLines0;
