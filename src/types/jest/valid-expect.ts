// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ValidExpect0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        alwaysAwait?: boolean;
      },
    ];

export type ValidExpect = 'off' | ValidExpect0;
