// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type UnifiedSignatures0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDifferentlyNamedParameters?: boolean;
      },
    ];

export type UnifiedSignatures = 'off' | UnifiedSignatures0;
