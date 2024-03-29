// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxNoLiterals0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noStrings?: boolean;
        allowedStrings?: string[];
        ignoreProps?: boolean;
        noAttributeStrings?: boolean;
      },
    ];

export type JsxNoLiterals = 'off' | JsxNoLiterals0;
