// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedModules0 =
  | [
      'off' | 'error' | 'warn',
      ...(
        | string
        | {
            name: string;
            message?: string;
          }
      )[],
    ]
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        paths?: [
          'off' | 'error' | 'warn',
          ...(
            | string
            | {
                name: string;
                message?: string;
              }
          )[],
        ];
        patterns?: string[];
      },
    ];

export type NoRestrictedModules = 'off' | NoRestrictedModules0;
