// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnusedModules0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            unusedExports: true;
            [k: string]: unknown;
          }
        | {
            missingExports: true;
            [k: string]: unknown;
          }
      ),
    ];

export type NoUnusedModules = 'off' | NoUnusedModules0;
