// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Camelcase0 = [
    ('off' | 'error' | 'warn'),
    {
        ignoreDestructuring?: boolean;
        properties?: 'always' | 'never';
        allow?: [string];
    },
];

export type Camelcase = 'off' | Camelcase0;
