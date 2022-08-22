// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ExpectExpect0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        assertFunctionNames?: [] | [string];
        additionalTestBlockFunctions?: string[];
      },
    ];

export type ExpectExpect = 'off' | ExpectExpect0;
