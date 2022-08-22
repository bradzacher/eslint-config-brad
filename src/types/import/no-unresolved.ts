// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnresolved0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        /**
         * @minItems 1
         */
        ignore?: [string, ...string[]];
        caseSensitive?: boolean;
        caseSensitiveStrict?: boolean;
      },
    ];

export type NoUnresolved = 'off' | NoUnresolved0;
