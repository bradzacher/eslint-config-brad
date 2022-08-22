// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxNestedDescribe0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      },
    ];

export type MaxNestedDescribe = 'off' | MaxNestedDescribe0;
