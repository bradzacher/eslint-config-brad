// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type CallbackReturn0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string[]];

export type CallbackReturn = 'off' | CallbackReturn0;
