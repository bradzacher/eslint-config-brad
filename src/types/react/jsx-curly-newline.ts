// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxCurlyNewline0 = [
    ('off' | 'error' | 'warn'),
    (
        | ('consistent' | 'never')
        | {
              singleline?: 'consistent' | 'require' | 'forbid';
              multiline?: 'consistent' | 'require' | 'forbid';
          }),
];

export type JsxCurlyNewline = 'off' | JsxCurlyNewline0;
