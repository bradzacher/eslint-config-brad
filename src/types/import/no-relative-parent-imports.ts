// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRelativeParentImports0 =
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
      },
    ];

export type NoRelativeParentImports = 'off' | NoRelativeParentImports0;
