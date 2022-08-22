// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoThrowLiteral0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowThrowingAny?: boolean;
        allowThrowingUnknown?: boolean;
      },
    ];

export type NoThrowLiteral = 'off' | NoThrowLiteral0;
