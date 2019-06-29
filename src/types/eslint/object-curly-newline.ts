// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ObjectCurlyNewline0 = [
    ('off' | 'error' | 'warn'),
    (
        | (
              | ('always' | 'never')
              | {
                    multiline?: boolean;
                    minProperties?: number;
                    consistent?: boolean;
                })
        | {
              ObjectExpression?:
                  | ('always' | 'never')
                  | {
                        multiline?: boolean;
                        minProperties?: number;
                        consistent?: boolean;
                    };
              ObjectPattern?:
                  | ('always' | 'never')
                  | {
                        multiline?: boolean;
                        minProperties?: number;
                        consistent?: boolean;
                    };
              ImportDeclaration?:
                  | ('always' | 'never')
                  | {
                        multiline?: boolean;
                        minProperties?: number;
                        consistent?: boolean;
                    };
              ExportDeclaration?:
                  | ('always' | 'never')
                  | {
                        multiline?: boolean;
                        minProperties?: number;
                        consistent?: boolean;
                    };
          }),
];

export type ObjectCurlyNewline = 'off' | ObjectCurlyNewline0;
