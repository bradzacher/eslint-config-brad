// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoLargeSnapshots0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maxSize?: number;
        whitelistedSnapshots?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: any[];
        };
      },
    ];

export type NoLargeSnapshots = 'off' | NoLargeSnapshots0;
