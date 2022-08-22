// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ValidExpect0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        alwaysAwait?: boolean;
        asyncMatchers?: string[];
        minArgs?: number;
        maxArgs?: number;
      },
    ];

export type ValidExpect = 'off' | ValidExpect0;
