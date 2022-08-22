// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUselessComputedKey0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForClassMembers?: boolean;
      },
    ];

export type NoUselessComputedKey = 'off' | NoUselessComputedKey0;
