// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoInferrableTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
      },
    ];

export type NoInferrableTypes = 'off' | NoInferrableTypes0;
