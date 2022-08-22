// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoDuplicates0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        considerQueryString?: boolean;
      },
    ];

export type NoDuplicates = 'off' | NoDuplicates0;
