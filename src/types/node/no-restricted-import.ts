// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoRestrictedImport0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | string
        | {
            name: string | string[];
            message?: string;
          }
      )[],
    ];

export type NoRestrictedImport = 'off' | NoRestrictedImport0;
