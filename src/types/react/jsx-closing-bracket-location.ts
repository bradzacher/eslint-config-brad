// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxClosingBracketLocation0 = [
    ('off' | 'error' | 'warn'),
    (
        | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
        | {
              location?:
                  | 'after-props'
                  | 'props-aligned'
                  | 'tag-aligned'
                  | 'line-aligned';
          }
        | {
              nonEmpty?:
                  | 'after-props'
                  | 'props-aligned'
                  | 'tag-aligned'
                  | 'line-aligned'
                  | false;
              selfClosing?:
                  | 'after-props'
                  | 'props-aligned'
                  | 'tag-aligned'
                  | 'line-aligned'
                  | false;
          }),
];

export type JsxClosingBracketLocation = 'off' | JsxClosingBracketLocation0;
