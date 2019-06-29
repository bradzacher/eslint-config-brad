// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Yoda0 = [
    ('off' | 'error' | 'warn'),
    ('always' | 'never'),
    {
        exceptRange?: boolean;
        onlyEquality?: boolean;
    },
];

export type Yoda = 'off' | Yoda0;
