// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Sort0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: string[][];
      },
    ];

export type Sort = 'off' | Sort0;
