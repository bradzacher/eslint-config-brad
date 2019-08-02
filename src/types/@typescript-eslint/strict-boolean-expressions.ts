// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type StrictBooleanExpressions0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        ignoreRhs?: boolean;
      },
    ];

export type StrictBooleanExpressions = 'off' | StrictBooleanExpressions0;
