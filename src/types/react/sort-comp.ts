// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SortComp0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        order?: string[];
        groups?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^.*$".
           */
          [k: string]: string[];
        };
      },
    ];

export type SortComp = 'off' | SortComp0;
