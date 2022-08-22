// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxNoBind0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowArrowFunctions?: boolean;
        allowBind?: boolean;
        allowFunctions?: boolean;
        ignoreRefs?: boolean;
        ignoreDOMComponents?: boolean;
      },
    ];

export type JsxNoBind = 'off' | JsxNoBind0;
