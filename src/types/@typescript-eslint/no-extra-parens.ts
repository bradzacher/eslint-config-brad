// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtraParens0 =
    | [('off' | 'error' | 'warn'), 'functions']
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
      ];

export type NoExtraParens = 'off' | NoExtraParens0;
