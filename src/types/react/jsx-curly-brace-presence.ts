// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxCurlyBracePresence0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            props?: 'always' | 'never' | 'ignore';
            children?: 'always' | 'never' | 'ignore';
            propElementValues?: 'always' | 'never' | 'ignore';
          }
        | ('always' | 'never' | 'ignore')
      ),
    ];

export type JsxCurlyBracePresence = 'off' | JsxCurlyBracePresence0;
