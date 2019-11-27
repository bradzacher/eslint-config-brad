// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUselessComputedKey0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForClassMembers?: boolean;
      },
    ];

export type NoUselessComputedKey = 'off' | NoUselessComputedKey0;
