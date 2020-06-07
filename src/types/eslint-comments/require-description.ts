// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RequireDescription0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: (
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

export type RequireDescription = 'off' | RequireDescription0;
