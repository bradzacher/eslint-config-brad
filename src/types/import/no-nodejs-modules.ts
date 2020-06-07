// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoNodejsModules0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
      },
    ];

export type NoNodejsModules = 'off' | NoNodejsModules0;
