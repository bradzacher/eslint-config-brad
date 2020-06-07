// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferGlobalConsole0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

export type PreferGlobalConsole = 'off' | PreferGlobalConsole0;
