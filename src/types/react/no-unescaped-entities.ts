// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnescapedEntities0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        forbid?: (
          | string
          | {
              char?: string;
              alternatives?: string[];
              [k: string]: any;
            })[];
      },
    ];

export type NoUnescapedEntities = 'off' | NoUnescapedEntities0;
