// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type First0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'absolute-first' | 'disable-absolute-first'];

export type First = 'off' | First0;
