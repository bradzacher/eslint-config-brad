// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUselessRename0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDestructuring?: boolean;
        ignoreImport?: boolean;
        ignoreExport?: boolean;
      },
    ];

export type NoUselessRename = 'off' | NoUselessRename0;
