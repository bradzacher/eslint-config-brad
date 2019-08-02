// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraParens0 =
  | [('off' | 'error' | 'warn'), 'functions']
  | [('off' | 'error' | 'warn'), 'functions', any]
  | [('off' | 'error' | 'warn'), 'all']
  | [
      ('off' | 'error' | 'warn'),
      'all',
      {
        conditionalAssign?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
        enforceForArrowConditionals?: boolean;
      },
    ]
  | [
      ('off' | 'error' | 'warn'),
      'all',
      {
        conditionalAssign?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
        enforceForArrowConditionals?: boolean;
      },
      any,
    ];

export type NoExtraParens = 'off' | NoExtraParens0;
