// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraneousDependencies0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        bundledDependencies?: boolean | unknown[];
        packageDir?: string | unknown[];
      },
    ];

export type NoExtraneousDependencies = 'off' | NoExtraneousDependencies0;
