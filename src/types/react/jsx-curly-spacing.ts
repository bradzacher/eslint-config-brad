// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxCurlySpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | (BasicConfig & {
            attributes?: BasicConfigOrBoolean;
            children?: BasicConfigOrBoolean;
            [k: string]: unknown;
          })
        | ('always' | 'never')
      ),
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | (BasicConfig & {
            attributes?: BasicConfigOrBoolean;
            children?: BasicConfigOrBoolean;
            [k: string]: unknown;
          })
        | ('always' | 'never')
      ),
      {
        allowMultiline?: boolean;
        spacing?: {
          objectLiterals?: 'always' | 'never';
          [k: string]: unknown;
        };
      },
    ];
type BasicConfigOrBoolean = BasicConfig | boolean;

interface BasicConfig {
  when?: 'always' | 'never';
  allowMultiline?: boolean;
  spacing?: {
    objectLiterals?: 'always' | 'never';
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export type JsxCurlySpacing = 'off' | JsxCurlySpacing0;
