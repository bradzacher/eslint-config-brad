// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoThrowLiteral0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowThrowingAny?: boolean;
        allowThrowingUnknown?: boolean;
      },
    ];

export type NoThrowLiteral = 'off' | NoThrowLiteral0;
