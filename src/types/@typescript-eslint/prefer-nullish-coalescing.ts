// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferNullishCoalescing0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreConditionalTests?: boolean;
        ignoreTernaryTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
        forceSuggestionFixer?: boolean;
      },
    ];

export type PreferNullishCoalescing = 'off' | PreferNullishCoalescing0;
