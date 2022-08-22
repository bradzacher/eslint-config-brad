// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnescapedEntities0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              char?: string;
              alternatives?: string[];
              [k: string]: unknown;
            }
        )[];
      },
    ];

export type NoUnescapedEntities = 'off' | NoUnescapedEntities0;
