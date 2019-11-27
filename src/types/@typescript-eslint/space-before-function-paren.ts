// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SpaceBeforeFunctionParen0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never')
        | {
            anonymous?: 'always' | 'never' | 'ignore';
            named?: 'always' | 'never' | 'ignore';
            asyncArrow?: 'always' | 'never' | 'ignore';
          }
      ),
    ];

export type SpaceBeforeFunctionParen = 'off' | SpaceBeforeFunctionParen0;
