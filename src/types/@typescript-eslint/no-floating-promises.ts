// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoFloatingPromises0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreVoid?: boolean;
      },
    ];

export type NoFloatingPromises = 'off' | NoFloatingPromises0;
