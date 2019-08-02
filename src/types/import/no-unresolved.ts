// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnresolved0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        ignore?: [string, ...(string)[]];
        caseSensitive?: boolean;
      },
    ];

export type NoUnresolved = 'off' | NoUnresolved0;
