// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Order0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: any[];
        'newlines-between'?:
          | 'ignore'
          | 'always'
          | 'always-and-inside-groups'
          | 'never';
      },
    ];

export type Order = 'off' | Order0;
