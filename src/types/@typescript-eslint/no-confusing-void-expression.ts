// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoConfusingVoidExpression0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreArrowShorthand?: boolean;
        ignoreVoidOperator?: boolean;
      },
    ];

export type NoConfusingVoidExpression = 'off' | NoConfusingVoidExpression0;
