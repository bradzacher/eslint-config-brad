// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type FunctionComponentDefinition0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        namedComponents?:
          | ('function-declaration' | 'arrow-function' | 'function-expression')
          | (
              | 'function-declaration'
              | 'arrow-function'
              | 'function-expression'
            )[];
        unnamedComponents?:
          | ('arrow-function' | 'function-expression')
          | ('arrow-function' | 'function-expression')[];
        [k: string]: unknown;
      },
    ];

export type FunctionComponentDefinition = 'off' | FunctionComponentDefinition0;
