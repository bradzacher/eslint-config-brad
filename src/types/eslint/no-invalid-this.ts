// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoInvalidThis0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        capIsConstructor?: boolean;
      },
    ];

export type NoInvalidThis = 'off' | NoInvalidThis0;
