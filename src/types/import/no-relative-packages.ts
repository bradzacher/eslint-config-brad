// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRelativePackages0 =
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

export type NoRelativePackages = 'off' | NoRelativePackages0;
