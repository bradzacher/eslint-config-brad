// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraneousRequire0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowModules?: string[];
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
        resolvePaths?: string[];
        tryExtensions?: string[];
      },
    ];

export type NoExtraneousRequire = 'off' | NoExtraneousRequire0;
