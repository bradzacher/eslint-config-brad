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
      },
    ];

export type Shebang = 'off' | Shebang0;
