// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnpublishedBin0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        convertPath?:
          | {
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^.+$".
               */
              [k: string]: [string, string];
            }
          | [
              {
                include: [string, ...string[]];
                exclude?: string[];
                replace: [string, string];
              },
              ...{
                include: [string, ...string[]];
                exclude?: string[];
                replace: [string, string];
              }[]
            ];
        [k: string]: unknown;
      },
    ];

export type NoUnpublishedBin = 'off' | NoUnpublishedBin0;
