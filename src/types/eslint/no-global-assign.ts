// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoGlobalAssign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      },
    ];

export type NoGlobalAssign = 'off' | NoGlobalAssign0;
