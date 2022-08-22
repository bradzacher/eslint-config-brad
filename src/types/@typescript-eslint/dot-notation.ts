// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type DotNotation0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowKeywords?: boolean;
        allowPattern?: string;
        allowPrivateClassPropertyAccess?: boolean;
        allowProtectedClassPropertyAccess?: boolean;
        allowIndexSignaturePropertyAccess?: boolean;
      },
    ];

export type DotNotation = 'off' | DotNotation0;
