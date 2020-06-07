// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferReadonlyParameterTypes0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkParameterProperties?: boolean;
      },
    ];

export type PreferReadonlyParameterTypes =
  | 'off'
  | PreferReadonlyParameterTypes0;
