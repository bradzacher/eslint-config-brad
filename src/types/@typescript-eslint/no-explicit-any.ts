// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoExplicitAny0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        fixToUnknown?: boolean;
        ignoreRestArgs?: boolean;
      },
    ];

export type NoExplicitAny = 'off' | NoExplicitAny0;
