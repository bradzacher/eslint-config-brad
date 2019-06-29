// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type TypeAnnotationSpacing0 = [
    ('off' | 'error' | 'warn'),
    {
        before?: boolean;
        after?: boolean;
        overrides?: {
            colon?: {
                before?: boolean;
                after?: boolean;
            };
            arrow?: {
                before?: boolean;
                after?: boolean;
            };
        };
    },
];

export type TypeAnnotationSpacing = 'off' | TypeAnnotationSpacing0;
