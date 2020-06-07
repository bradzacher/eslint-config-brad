// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Extensions0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'ignorePackages' | 'never']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'ignorePackages' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'ignorePackages' | 'never',
      {
        pattern?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: unknown;
      },
    ]
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        pattern?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: unknown;
      },
    ]
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ]
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'ignorePackages' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'ignorePackages' | 'never',
      {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ];

export type Extensions = 'off' | Extensions0;
