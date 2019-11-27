// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnusedVarsExperimental0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoredNamesRegex?: string | false;
        ignoreArgsIfArgsAfterAreUsed?: boolean;
      },
    ];

export type NoUnusedVarsExperimental = 'off' | NoUnusedVarsExperimental0;
