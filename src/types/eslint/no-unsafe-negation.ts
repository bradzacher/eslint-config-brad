// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnsafeNegation0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForOrderingRelations?: boolean;
      },
    ];

export type NoUnsafeNegation = 'off' | NoUnsafeNegation0;
