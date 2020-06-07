// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedRequire0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | string
        | {
            name: string | string[];
            message?: string;
          }
      )[],
    ];

export type NoRestrictedRequire = 'off' | NoRestrictedRequire0;
