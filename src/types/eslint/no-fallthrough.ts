// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoFallthrough0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        commentPattern?: string;
      },
    ];

export type NoFallthrough = 'off' | NoFallthrough0;
