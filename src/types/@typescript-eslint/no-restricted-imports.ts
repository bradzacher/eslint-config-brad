// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedImports0 =
  | [
      'off' | 'error' | 'warn',
      ...(
        | unknown
        | {
            allowTypeImports?: boolean;
            [k: string]: unknown;
          }
      )[],
    ]
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        paths?: [
          'off' | 'error' | 'warn',
          ...(
            | unknown
            | {
                allowTypeImports?: boolean;
                [k: string]: unknown;
              }
          )[],
        ];
        patterns?:
          | unknown
          | {
              allowTypeImports?: boolean;
              [k: string]: unknown;
            }[];
        [k: string]: unknown;
      },
    ];

export type NoRestrictedImports = 'off' | NoRestrictedImports0;
