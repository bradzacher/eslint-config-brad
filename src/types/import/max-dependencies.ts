// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxDependencies0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
        ignoreTypeImports?: boolean;
      },
    ];

export type MaxDependencies = 'off' | MaxDependencies0;
