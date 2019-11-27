// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoHooks0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: any[];
      },
    ];

export type NoHooks = 'off' | NoHooks0;
