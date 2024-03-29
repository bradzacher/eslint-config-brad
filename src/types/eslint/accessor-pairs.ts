// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type AccessorPairs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
        enforceForClassMembers?: boolean;
      },
    ];

export type AccessorPairs = 'off' | AccessorPairs0;
