// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ForbidElements0 = [
    ('off' | 'error' | 'warn'),
    {
        forbid?: (
            | string
            | {
                  element: string;
                  message?: string;
              })[];
    },
];

export type ForbidElements = 'off' | ForbidElements0;
