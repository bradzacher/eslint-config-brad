// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type DisplayName0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTranspilerName?: boolean;
      },
    ];

export type DisplayName = 'off' | DisplayName0;
