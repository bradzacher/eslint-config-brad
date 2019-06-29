// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NonblockStatementBodyPosition0 = [
    ('off' | 'error' | 'warn'),
    ('beside' | 'below' | 'any'),
    {
        overrides?: {
            if?: 'beside' | 'below' | 'any';
            else?: 'beside' | 'below' | 'any';
            while?: 'beside' | 'below' | 'any';
            do?: 'beside' | 'below' | 'any';
            for?: 'beside' | 'below' | 'any';
        };
    },
];

export type NonblockStatementBodyPosition =
    | 'off'
    | NonblockStatementBodyPosition0;
