// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type StateInConstructor0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never')];

export type StateInConstructor = 'off' | StateInConstructor0;
