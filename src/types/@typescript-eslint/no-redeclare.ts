// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRedeclare0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        builtinGlobals?: boolean;
        ignoreDeclarationMerge?: boolean;
      },
    ];

export type NoRedeclare = 'off' | NoRedeclare0;
