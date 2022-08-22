// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type Strict0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never' | 'global' | 'function' | 'safe'];

export type Strict = 'off' | Strict0;
