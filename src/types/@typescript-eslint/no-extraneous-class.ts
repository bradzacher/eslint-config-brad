// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraneousClass0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowConstructorOnly?: boolean;
        allowEmpty?: boolean;
        allowStaticOnly?: boolean;
      },
    ];

export type NoExtraneousClass = 'off' | NoExtraneousClass0;
