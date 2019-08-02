// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnknownProperty0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        ignore?: string[];
      },
    ];

export type NoUnknownProperty = 'off' | NoUnknownProperty0;
