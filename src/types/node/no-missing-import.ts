// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMissingImport0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowModules?: string[];
        tryExtensions?: string[];
        resolvePaths?: string[];
      },
    ];

export type NoMissingImport = 'off' | NoMissingImport0;
