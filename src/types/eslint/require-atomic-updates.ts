// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RequireAtomicUpdates0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowProperties?: boolean;
      },
    ];

export type RequireAtomicUpdates = 'off' | RequireAtomicUpdates0;
