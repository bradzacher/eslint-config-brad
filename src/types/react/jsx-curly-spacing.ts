// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxCurlySpacing0 = [
    ('off' | 'error' | 'warn'),
    (
        | (BasicConfig & {
              attributes?: BasicConfigOrBoolean;
              children?: BasicConfigOrBoolean;
              [k: string]: any;
          })
        | ('always' | 'never')),
    {
        allowMultiline?: boolean;
        spacing?: {
            objectLiterals?: 'always' | 'never';
            [k: string]: any;
        };
    },
];
type BasicConfigOrBoolean = BasicConfig | boolean;

interface BasicConfig {
    when?: 'always' | 'never';
    allowMultiline?: boolean;
    spacing?: {
        objectLiterals?: 'always' | 'never';
        [k: string]: any;
    };
    [k: string]: any;
}

export type JsxCurlySpacing = 'off' | JsxCurlySpacing0;
