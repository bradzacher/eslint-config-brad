// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Quotes0 = [
    ('off' | 'error' | 'warn'),
    ('single' | 'double' | 'backtick'),
    (
        | 'avoid-escape'
        | {
              avoidEscape?: boolean;
              allowTemplateLiterals?: boolean;
          }),
];

export type Quotes = 'off' | Quotes0;
