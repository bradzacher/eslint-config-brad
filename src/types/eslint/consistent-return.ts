// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ConsistentReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        treatUndefinedAsUnspecified?: boolean;
      },
    ];

export type ConsistentReturn = 'off' | ConsistentReturn0;
