// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedMatchers0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: string | null;
      },
    ];

export type NoRestrictedMatchers = 'off' | NoRestrictedMatchers0;
