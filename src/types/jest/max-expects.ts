// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxExpects0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      },
    ];

export type MaxExpects = 'off' | MaxExpects0;
