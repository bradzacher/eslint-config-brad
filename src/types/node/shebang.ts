// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Shebang0 =
  | []
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
      },
    ];

export type Shebang = 'off' | Shebang0;
