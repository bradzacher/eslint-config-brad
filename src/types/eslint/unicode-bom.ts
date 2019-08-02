// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type UnicodeBom0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never')];

export type UnicodeBom = 'off' | UnicodeBom0;
