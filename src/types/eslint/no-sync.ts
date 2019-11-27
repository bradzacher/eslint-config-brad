// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoSync0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAtRootLevel?: boolean;
      },
    ];

export type NoSync = 'off' | NoSync0;
