// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type StylePropObject0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
        [k: string]: unknown;
      },
    ];

export type StylePropObject = 'off' | StylePropObject0;
