// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUse0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: (
          | 'eslint'
          | 'eslint-disable'
          | 'eslint-disable-line'
          | 'eslint-disable-next-line'
          | 'eslint-enable'
          | 'eslint-env'
          | 'exported'
          | 'global'
          | 'globals'
        )[];
      },
    ];

export type NoUse = 'off' | NoUse0;
