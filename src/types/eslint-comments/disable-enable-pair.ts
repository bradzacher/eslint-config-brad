// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type DisableEnablePair0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowWholeFile?: boolean;
      },
    ];

export type DisableEnablePair = 'off' | DisableEnablePair0;
