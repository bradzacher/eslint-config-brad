// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ArrayType0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        default?: 'array' | 'generic' | 'array-simple';
        readonly?: 'array' | 'generic' | 'array-simple';
        [k: string]: unknown;
      },
    ];

export type ArrayType = 'off' | ArrayType0;
