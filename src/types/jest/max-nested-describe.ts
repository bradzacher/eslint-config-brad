// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type MaxNestedDescribe0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      },
    ];

export type MaxNestedDescribe = 'off' | MaxNestedDescribe0;
