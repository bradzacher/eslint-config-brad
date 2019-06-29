// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxLinesPerFunction0 = [
    ('off' | 'error' | 'warn'),
    (
        | {
              max?: number;
              skipComments?: boolean;
              skipBlankLines?: boolean;
              IIFEs?: boolean;
          }
        | number),
];

export type MaxLinesPerFunction = 'off' | MaxLinesPerFunction0;
