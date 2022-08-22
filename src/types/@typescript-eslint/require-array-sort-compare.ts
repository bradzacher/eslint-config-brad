// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type RequireArraySortCompare0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreStringArrays?: boolean;
        [k: string]: unknown;
      },
    ];

export type RequireArraySortCompare = 'off' | RequireArraySortCompare0;
