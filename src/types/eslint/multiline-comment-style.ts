// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MultilineCommentStyle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      'starred-block' | 'separate-lines' | 'bare-block',
    ];

export type MultilineCommentStyle = 'off' | MultilineCommentStyle0;
