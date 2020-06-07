// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraBooleanCast0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForLogicalOperands?: boolean;
      },
    ];

export type NoExtraBooleanCast = 'off' | NoExtraBooleanCast0;
