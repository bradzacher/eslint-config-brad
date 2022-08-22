// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type IdDenylist0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];

export type IdDenylist = 'off' | IdDenylist0;
