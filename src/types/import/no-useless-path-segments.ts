// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUselessPathSegments0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        noUselessIndex?: boolean;
      },
    ];

export type NoUselessPathSegments = 'off' | NoUselessPathSegments0;
