// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RestrictPlusOperands0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkCompoundAssignments?: boolean;
        allowAny?: boolean;
      },
    ];

export type RestrictPlusOperands = 'off' | RestrictPlusOperands0;
