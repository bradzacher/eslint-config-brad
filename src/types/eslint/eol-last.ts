// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type EolLast0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never' | 'unix' | 'windows')];

export type EolLast = 'off' | EolLast0;
