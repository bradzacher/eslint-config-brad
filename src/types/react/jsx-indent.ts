// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxIndent0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'tab' | number]
  | [
      'off' | 'error' | 'warn',
      'tab' | number,
      {
        checkAttributes?: boolean;
        indentLogicalExpressions?: boolean;
      },
    ];

export type JsxIndent = 'off' | JsxIndent0;
