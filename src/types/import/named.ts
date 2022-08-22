// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Named0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
      },
    ];

export type Named = 'off' | Named0;
