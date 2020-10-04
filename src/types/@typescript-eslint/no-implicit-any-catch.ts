// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoImplicitAnyCatch0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowExplicitAny?: boolean;
      },
    ];

export type NoImplicitAnyCatch = 'off' | NoImplicitAnyCatch0;
