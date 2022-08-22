// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoConstantCondition0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkLoops?: boolean;
      },
    ];

export type NoConstantCondition = 'off' | NoConstantCondition0;
