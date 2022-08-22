// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxNoScriptUrl0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        name: string;
        props: string[];
      }[],
    ];

export type JsxNoScriptUrl = 'off' | JsxNoScriptUrl0;
