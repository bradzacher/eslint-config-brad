// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedPaths0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        zones?: [
          {
            target?: string;
            from?: string;
          },
          ...({
            target?: string;
            from?: string;
          })[],
        ];
        basePath?: string;
      },
    ];

export type NoRestrictedPaths = 'off' | NoRestrictedPaths0;
