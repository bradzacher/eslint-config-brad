// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxMaxPropsPerLine0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maximum?: number;
        when?: 'always' | 'multiline';
        [k: string]: unknown;
      },
    ];

export type JsxMaxPropsPerLine = 'off' | JsxMaxPropsPerLine0;
