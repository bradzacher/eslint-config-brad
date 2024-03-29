// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ConsistentTestIt0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        fn?: 'it' | 'test';
        withinDescribe?: 'it' | 'test';
      },
    ];

export type ConsistentTestIt = 'off' | ConsistentTestIt0;
