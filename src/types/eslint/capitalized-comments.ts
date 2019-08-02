// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type CapitalizedComments0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never')]
  | [
      ('off' | 'error' | 'warn'),
      ('always' | 'never'),
      (
        | {
            ignorePattern?: string;
            ignoreInlineComments?: boolean;
            ignoreConsecutiveComments?: boolean;
          }
        | {
            line?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
            block?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
          }),
    ];

export type CapitalizedComments = 'off' | CapitalizedComments0;
