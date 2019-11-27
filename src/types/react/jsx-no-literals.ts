// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxNoLiterals0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noStrings?: boolean;
        allowedStrings?: string[];
      },
    ];

export type JsxNoLiterals = 'off' | JsxNoLiterals0;
