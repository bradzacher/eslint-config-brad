// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SemiStyle0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('last' | 'first')];

export type SemiStyle = 'off' | SemiStyle0;
