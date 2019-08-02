// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxPropsNoSpreading0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      ({
        html?: 'enforce' | 'ignore';
        custom?: 'enforce' | 'ignore';
        exceptions?: string[];
        [k: string]: any;
      } & {
        [k: string]: any;
      }),
    ];

export type JsxPropsNoSpreading = 'off' | JsxPropsNoSpreading0;
