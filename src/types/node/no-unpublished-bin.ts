// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnpublishedBin0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        convertPath?:
          | {
              /**
               * @minItems 2
               * @maxItems 2
               *
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^.+$".
               */
              [k: string]: [string, string];
            }
          | [
              {
                /**
                 * @minItems 1
                 */
                include: [string, ...string[]];
                exclude?: string[];
                /**
                 * @minItems 2
                 * @maxItems 2
                 */
                replace: [string, string];
              },
              ...{
                /**
                 * @minItems 1
                 */
                include: [string, ...string[]];
                exclude?: string[];
                /**
                 * @minItems 2
                 * @maxItems 2
                 */
                replace: [string, string];
              }[],
            ];
        [k: string]: unknown;
      },
    ];

export type NoUnpublishedBin = 'off' | NoUnpublishedBin0;
