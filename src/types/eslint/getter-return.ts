// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type GetterReturn0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowImplicit?: boolean;
      },
    ];

export type GetterReturn = 'off' | GetterReturn0;
