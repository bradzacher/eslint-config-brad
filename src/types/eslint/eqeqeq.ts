// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Eqeqeq0 =
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), 'always']
  | [
      ('off' | 'error' | 'warn'),
      'always',
      {
        null?: 'always' | 'never' | 'ignore';
      },
    ]
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('smart' | 'allow-null')];

export type Eqeqeq = 'off' | Eqeqeq0;
