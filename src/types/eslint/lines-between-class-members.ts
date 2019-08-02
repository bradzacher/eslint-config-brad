// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type LinesBetweenClassMembers0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('always' | 'never')]
  | [
      ('off' | 'error' | 'warn'),
      ('always' | 'never'),
      {
        exceptAfterSingleLine?: boolean;
      },
    ];

export type LinesBetweenClassMembers = 'off' | LinesBetweenClassMembers0;
