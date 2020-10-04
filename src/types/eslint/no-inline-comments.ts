// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoInlineComments0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignorePattern?: string;
      },
    ];

export type NoInlineComments = 'off' | NoInlineComments0;
