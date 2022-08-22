// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxMaxPropsPerLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            maximum?: {
              single?: number;
              multi?: number;
              [k: string]: unknown;
            };
          }
        | {
            maximum?: number;
            when?: 'always' | 'multiline';
          }
      ),
    ];

export type JsxMaxPropsPerLine = 'off' | JsxMaxPropsPerLine0;
