// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnusedModules0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            unusedExports: true;
            [k: string]: any;
          }
        | {
            missingExports: true;
            [k: string]: any;
          }
      ),
    ];

export type NoUnusedModules = 'off' | NoUnusedModules0;
