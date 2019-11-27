// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxDepth0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
    ];

export type MaxDepth = 'off' | MaxDepth0;
