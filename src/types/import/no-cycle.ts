// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoCycle0 =
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
        maxDepth?: number | '∞';
        /**
         * ignore external modules
         */
        ignoreExternal?: boolean;
      },
    ];

export type NoCycle = 'off' | NoCycle0;
