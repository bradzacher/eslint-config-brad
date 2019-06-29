// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SpaceUnaryOps0 = [
    ('off' | 'error' | 'warn'),
    {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
            [k: string]: boolean;
        };
    },
];

export type SpaceUnaryOps = 'off' | SpaceUnaryOps0;
