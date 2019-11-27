// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoImplicitGlobals0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        lexicalBindings?: boolean;
      },
    ];

export type NoImplicitGlobals = 'off' | NoImplicitGlobals0;
