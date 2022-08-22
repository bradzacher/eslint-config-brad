// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxPropsNoSpreading0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        html?: 'enforce' | 'ignore';
        custom?: 'enforce' | 'ignore';
        exceptions?: string[];
        [k: string]: unknown;
      } & {
        [k: string]: unknown;
      },
    ];

export type JsxPropsNoSpreading = 'off' | JsxPropsNoSpreading0;
