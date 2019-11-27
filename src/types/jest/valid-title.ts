// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ValidTitle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTypeOfDescribeName?: boolean;
      },
    ];

export type ValidTitle = 'off' | ValidTitle0;
