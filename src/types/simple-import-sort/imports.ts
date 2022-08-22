// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Imports0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: string[][];
      },
    ];

export type Imports = 'off' | Imports0;
