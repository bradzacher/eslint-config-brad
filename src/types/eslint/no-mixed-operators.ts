// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoMixedOperators0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: [
          (
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
          ),
          (
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
          ),
          ...(
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
          )[],
        ][];
        allowSamePrecedence?: boolean;
      },
    ];

export type NoMixedOperators = 'off' | NoMixedOperators0;
