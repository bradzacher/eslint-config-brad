// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type LinesAroundDirective0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      (
        | ('always' | 'never')
        | {
            before?: 'always' | 'never';
            after?: 'always' | 'never';
          }),
    ];

export type LinesAroundDirective = 'off' | LinesAroundDirective0;
