// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxStatements0 = [
    ('off' | 'error' | 'warn'),
    (
        | number
        | {
              maximum?: number;
              max?: number;
          }),
    {
        ignoreTopLevelFunctions?: boolean;
    },
];

export type MaxStatements = 'off' | MaxStatements0;
