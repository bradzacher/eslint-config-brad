// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoImplicitCoercion0 = [
    ('off' | 'error' | 'warn'),
    {
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        allow?: ('~' | '!!' | '+' | '*')[];
    },
];

export type NoImplicitCoercion = 'off' | NoImplicitCoercion0;
