// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NewlineAfterVar0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('never' | 'always')];

export type NewlineAfterVar = 'off' | NewlineAfterVar0;
