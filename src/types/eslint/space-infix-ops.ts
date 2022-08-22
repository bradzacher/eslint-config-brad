// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type SpaceInfixOps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        int32Hint?: boolean;
      },
    ];

export type SpaceInfixOps = 'off' | SpaceInfixOps0;
