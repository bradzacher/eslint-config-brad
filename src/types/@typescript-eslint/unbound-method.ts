// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type UnboundMethod0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        ignoreStatic?: boolean;
      },
    ];

export type UnboundMethod = 'off' | UnboundMethod0;
