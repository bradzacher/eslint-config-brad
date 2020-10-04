// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferRegexLiterals0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        disallowRedundantWrapping?: boolean;
      },
    ];

export type PreferRegexLiterals = 'off' | PreferRegexLiterals0;
