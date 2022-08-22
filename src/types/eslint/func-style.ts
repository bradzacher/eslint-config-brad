// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type FuncStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'declaration' | 'expression']
  | [
      'off' | 'error' | 'warn',
      'declaration' | 'expression',
      {
        allowArrowFunctions?: boolean;
      },
    ];

export type FuncStyle = 'off' | FuncStyle0;
