// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Radix0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed'];

export type Radix = 'off' | Radix0;
