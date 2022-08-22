// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxNoLeakedRender0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        validStrategies?: ('ternary' | 'coerce')[];
      },
    ];

export type JsxNoLeakedRender = 'off' | JsxNoLeakedRender0;
