// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoFloatingPromises0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreVoid?: boolean;
        ignoreIIFE?: boolean;
      },
    ];

export type NoFloatingPromises = 'off' | NoFloatingPromises0;
