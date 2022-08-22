// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type PreferLiteralEnumMember0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowBitwiseExpressions?: boolean;
      },
    ];

export type PreferLiteralEnumMember = 'off' | PreferLiteralEnumMember0;
