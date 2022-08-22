// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxIndentProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('tab' | 'first')
        | number
        | {
            indentMode?: ('tab' | 'first') | number;
            ignoreTernaryOperator?: boolean;
            [k: string]: unknown;
          }
      ),
    ];

export type JsxIndentProps = 'off' | JsxIndentProps0;
