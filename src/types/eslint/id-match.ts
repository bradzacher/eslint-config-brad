// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type IdMatch0 = [
    ('off' | 'error' | 'warn'),
    string,
    {
        properties?: boolean;
        onlyDeclarations?: boolean;
        ignoreDestructuring?: boolean;
        [k: string]: any;
    },
];

export type IdMatch = 'off' | IdMatch0;
