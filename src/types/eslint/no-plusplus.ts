// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoPlusplus0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowForLoopAfterthoughts?: boolean;
      },
    ];

export type NoPlusplus = 'off' | NoPlusplus0;
