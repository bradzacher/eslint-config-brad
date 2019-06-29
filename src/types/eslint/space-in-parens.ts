// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SpaceInParens0 = [
    ('off' | 'error' | 'warn'),
    ('always' | 'never'),
    {
        exceptions?: ('{}' | '[]' | '()' | 'empty')[];
    },
];

export type SpaceInParens = 'off' | SpaceInParens0;
