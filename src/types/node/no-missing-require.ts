// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMissingRequire0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowModules?: string[];
        tryExtensions?: string[];
        resolvePaths?: string[];
      },
    ];

export type NoMissingRequire = 'off' | NoMissingRequire0;
