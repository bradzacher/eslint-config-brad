// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoInvalidThis0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        capIsConstructor?: boolean;
      },
    ];

export type NoInvalidThis = 'off' | NoInvalidThis0;
