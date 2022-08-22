// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type FunctionParenNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | (
            | 'always'
            | 'never'
            | 'consistent'
            | 'multiline'
            | 'multiline-arguments'
          )
        | {
            minItems?: number;
          }
      ),
    ];

export type FunctionParenNewline = 'off' | FunctionParenNewline0;
