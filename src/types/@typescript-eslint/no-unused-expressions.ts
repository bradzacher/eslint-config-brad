// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnusedExpressions0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowShortCircuit?: boolean;
        allowTernary?: boolean;
        allowTaggedTemplates?: boolean;
        enforceForJSX?: boolean;
      },
    ];

export type NoUnusedExpressions = 'off' | NoUnusedExpressions0;
