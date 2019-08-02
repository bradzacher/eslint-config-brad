// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type TemplateCurlySpacing0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never')];

export type TemplateCurlySpacing = 'off' | TemplateCurlySpacing0;
