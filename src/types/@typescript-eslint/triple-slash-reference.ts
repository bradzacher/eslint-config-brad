// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type TripleSlashReference0 = [
    ('off' | 'error' | 'warn'),
    {
        lib?: 'always' | 'never';
        path?: 'always' | 'never';
        types?: 'always' | 'never' | 'prefer-import';
    },
];

export type TripleSlashReference = 'off' | TripleSlashReference0;
