// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMultiSpaces0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^([A-Z][a-z]*)+$".
           */
          [k: string]: boolean;
        };
        ignoreEOLComments?: boolean;
      },
    ];

export type NoMultiSpaces = 'off' | NoMultiSpaces0;
