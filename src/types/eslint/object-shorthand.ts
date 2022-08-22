// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ObjectShorthand0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | 'always'
        | 'methods'
        | 'properties'
        | 'never'
        | 'consistent'
        | 'consistent-as-needed'
      ),
    ]
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'methods' | 'properties']
  | [
      'off' | 'error' | 'warn',
      'always' | 'methods' | 'properties',
      {
        avoidQuotes?: boolean;
      },
    ]
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'methods']
  | [
      'off' | 'error' | 'warn',
      'always' | 'methods',
      {
        ignoreConstructors?: boolean;
        methodsIgnorePattern?: string;
        avoidQuotes?: boolean;
        avoidExplicitReturnArrows?: boolean;
      },
    ];

export type ObjectShorthand = 'off' | ObjectShorthand0;
