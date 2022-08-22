// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoConfusingArrow0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowParens?: boolean;
        onlyOneSimpleParam?: boolean;
      },
    ];

export type NoConfusingArrow = 'off' | NoConfusingArrow0;
