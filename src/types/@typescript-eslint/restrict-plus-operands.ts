// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type RestrictPlusOperands0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkCompoundAssignments?: boolean;
        allowAny?: boolean;
      },
    ];

export type RestrictPlusOperands = 'off' | RestrictPlusOperands0;
