// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoInvalidRegexp0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowConstructorFlags?: string[];
      },
    ];

export type NoInvalidRegexp = 'off' | NoInvalidRegexp0;
