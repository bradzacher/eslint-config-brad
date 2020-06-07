// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferGlobalProcess0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

export type PreferGlobalProcess = 'off' | PreferGlobalProcess0;
