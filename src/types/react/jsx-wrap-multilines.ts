// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxWrapMultilines0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        declaration?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        return?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        condition?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        logical?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        prop?: true | false | 'ignore' | 'parens' | 'parens-new-line';
      },
    ];

export type JsxWrapMultilines = 'off' | JsxWrapMultilines0;
