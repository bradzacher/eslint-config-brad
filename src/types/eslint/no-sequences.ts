// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoSequences0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInParentheses?: boolean;
      },
    ];

export type NoSequences = 'off' | NoSequences0;
