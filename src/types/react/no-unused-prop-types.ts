// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnusedPropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        customValidators?: string[];
        skipShapeProps?: boolean;
      },
    ];

export type NoUnusedPropTypes = 'off' | NoUnusedPropTypes0;
