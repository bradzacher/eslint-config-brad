// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxSortProps0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        callbacksLast?: boolean;
        shorthandFirst?: boolean;
        shorthandLast?: boolean;
        ignoreCase?: boolean;
        noSortAlphabetically?: boolean;
        reservedFirst?: unknown[] | boolean;
      },
    ];

export type JsxSortProps = 'off' | JsxSortProps0;
