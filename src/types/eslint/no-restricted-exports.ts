// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoRestrictedExports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        restrictedNamedExports?: string[];
      },
    ];

export type NoRestrictedExports = 'off' | NoRestrictedExports0;
