// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoIrregularWhitespace0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        skipComments?: boolean;
        skipStrings?: boolean;
        skipTemplates?: boolean;
        skipRegExps?: boolean;
      },
    ];

export type NoIrregularWhitespace = 'off' | NoIrregularWhitespace0;
