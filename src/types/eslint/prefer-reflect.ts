// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferReflect0 = [
    ('off' | 'error' | 'warn'),
    {
        exceptions?: (
            | 'apply'
            | 'call'
            | 'delete'
            | 'defineProperty'
            | 'getOwnPropertyDescriptor'
            | 'getPrototypeOf'
            | 'setPrototypeOf'
            | 'isExtensible'
            | 'getOwnPropertyNames'
            | 'preventExtensions')[];
    },
];

export type PreferReflect = 'off' | PreferReflect0;
