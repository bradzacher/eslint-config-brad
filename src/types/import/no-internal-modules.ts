// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoInternalModules0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            allow?: string[];
          }
        | {
            forbid?: string[];
          }
      ),
    ];

export type NoInternalModules = 'off' | NoInternalModules0;
