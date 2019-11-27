// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ClassNameCasing0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowUnderscorePrefix?: boolean;
      },
    ];

export type ClassNameCasing = 'off' | ClassNameCasing0;
