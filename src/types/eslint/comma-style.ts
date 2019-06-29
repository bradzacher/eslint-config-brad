// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type CommaStyle0 = [
    ('off' | 'error' | 'warn'),
    ('first' | 'last'),
    {
        exceptions?: {
            [k: string]: boolean;
        };
    },
];

export type CommaStyle = 'off' | CommaStyle0;
