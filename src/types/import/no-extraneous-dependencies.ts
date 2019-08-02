// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraneousDependencies0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        devDependencies?: boolean | any[];
        optionalDependencies?: boolean | any[];
        peerDependencies?: boolean | any[];
        packageDir?: string | any[];
      },
    ];

export type NoExtraneousDependencies = 'off' | NoExtraneousDependencies0;
