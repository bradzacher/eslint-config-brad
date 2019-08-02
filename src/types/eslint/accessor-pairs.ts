// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type AccessorPairs0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
      },
    ];

export type AccessorPairs = 'off' | AccessorPairs0;
