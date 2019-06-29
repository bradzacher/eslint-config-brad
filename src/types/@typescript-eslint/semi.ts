// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Semi0 =
    | [
          ('off' | 'error' | 'warn'),
          ('off' | 'error' | 'warn'),
          'never',
          {
              beforeStatementContinuationChars?: 'always' | 'any' | 'never';
          },
      ]
    | [
          ('off' | 'error' | 'warn'),
          ('off' | 'error' | 'warn'),
          'always',
          {
              omitLastInOneLineBlock?: boolean;
          },
      ];

export type Semi = 'off' | Semi0;
