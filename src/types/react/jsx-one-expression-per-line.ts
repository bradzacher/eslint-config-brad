// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxOneExpressionPerLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: 'none' | 'literal' | 'single-child';
      },
    ];

export type JsxOneExpressionPerLine = 'off' | JsxOneExpressionPerLine0;
