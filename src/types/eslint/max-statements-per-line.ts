// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type MaxStatementsPerLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      },
    ];

export type MaxStatementsPerLine = 'off' | MaxStatementsPerLine0;
