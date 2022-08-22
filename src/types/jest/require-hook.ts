// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RequireHook0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedFunctionCalls?: string[];
      },
    ];

export type RequireHook = 'off' | RequireHook0;
