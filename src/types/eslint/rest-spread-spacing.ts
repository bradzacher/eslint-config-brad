// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RestSpreadSpacing0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never')];

export type RestSpreadSpacing = 'off' | RestSpreadSpacing0;
