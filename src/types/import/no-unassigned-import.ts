// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnassignedImport0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        allow?: string[];
      },
    ];

export type NoUnassignedImport = 'off' | NoUnassignedImport0;
