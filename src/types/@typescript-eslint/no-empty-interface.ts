// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoEmptyInterface0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowSingleExtends?: boolean;
      },
    ];

export type NoEmptyInterface = 'off' | NoEmptyInterface0;
