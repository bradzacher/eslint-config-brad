// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ReturnAwait0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'in-try-catch' | 'always' | 'never'];

export type ReturnAwait = 'off' | ReturnAwait0;
