// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoMixedOperators0 = [
    ('off' | 'error' | 'warn'),
    {
        groups?: (
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
            | 'instanceof')[][];
        allowSamePrecedence?: boolean;
    },
];

export type NoMixedOperators = 'off' | NoMixedOperators0;
