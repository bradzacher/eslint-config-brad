// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxNewline0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prevent?: boolean;
      },
    ];

export type JsxNewline = 'off' | JsxNewline0;
