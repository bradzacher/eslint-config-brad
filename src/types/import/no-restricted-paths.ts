// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedPaths0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        zones?: [
          {
            target?: string;
            from?: string;
            except?: string[];
            message?: string;
          },
          ...{
            target?: string;
            from?: string;
            except?: string[];
            message?: string;
          }[],
        ];
        basePath?: string;
      },
    ];

export type NoRestrictedPaths = 'off' | NoRestrictedPaths0;
