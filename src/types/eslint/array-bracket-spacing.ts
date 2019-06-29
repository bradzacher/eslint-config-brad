// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ArrayBracketSpacing0 = [
    ('off' | 'error' | 'warn'),
    ('always' | 'never'),
    {
        singleValue?: boolean;
        objectsInArrays?: boolean;
        arraysInArrays?: boolean;
    },
];

export type ArrayBracketSpacing = 'off' | ArrayBracketSpacing0;
