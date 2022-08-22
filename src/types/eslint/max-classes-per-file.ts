// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxClassesPerFile0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            ignoreExpressions?: boolean;
            max?: number;
          }
      ),
    ];

export type MaxClassesPerFile = 'off' | MaxClassesPerFile0;
