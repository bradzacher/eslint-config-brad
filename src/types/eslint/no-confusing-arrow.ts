// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoConfusingArrow0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowParens?: boolean;
      },
    ];

export type NoConfusingArrow = 'off' | NoConfusingArrow0;
