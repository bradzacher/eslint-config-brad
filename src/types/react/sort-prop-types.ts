// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SortPropTypes0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        requiredFirst?: boolean;
        callbacksLast?: boolean;
        ignoreCase?: boolean;
        noSortAlphabetically?: boolean;
        sortShapeProp?: boolean;
      },
    ];

export type SortPropTypes = 'off' | SortPropTypes0;
