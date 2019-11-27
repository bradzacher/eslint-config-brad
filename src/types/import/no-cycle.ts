// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoCycle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        ignore?: [string, ...string[]];
        /**
         * maximum dependency depth to traverse
         */
        maxDepth?: number;
      },
    ];

export type NoCycle = 'off' | NoCycle0;
