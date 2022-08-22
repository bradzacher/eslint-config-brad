// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ConsistentTypeExports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        fixMixedExportsWithInlineTypeSpecifier?: boolean;
      },
    ];

export type ConsistentTypeExports = 'off' | ConsistentTypeExports0;
