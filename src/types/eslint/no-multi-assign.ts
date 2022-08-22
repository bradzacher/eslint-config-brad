// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoMultiAssign0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreNonDeclaration?: boolean;
      },
    ];

export type NoMultiAssign = 'off' | NoMultiAssign0;
