// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ArrowBodyStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'as-needed']
  | [
      'off' | 'error' | 'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral?: boolean;
      },
    ];

export type ArrowBodyStyle = 'off' | ArrowBodyStyle0;
