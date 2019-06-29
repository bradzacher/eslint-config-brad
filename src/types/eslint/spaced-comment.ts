// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SpacedComment0 = [
    ('off' | 'error' | 'warn'),
    ('always' | 'never'),
    {
        exceptions?: string[];
        markers?: string[];
        line?: {
            exceptions?: string[];
            markers?: string[];
        };
        block?: {
            exceptions?: string[];
            markers?: string[];
            balanced?: boolean;
        };
    },
];

export type SpacedComment = 'off' | SpacedComment0;
