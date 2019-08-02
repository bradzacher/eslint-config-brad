// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoWillUpdateSetState0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), 'disallow-in-func'];

export type NoWillUpdateSetState = 'off' | NoWillUpdateSetState0;
