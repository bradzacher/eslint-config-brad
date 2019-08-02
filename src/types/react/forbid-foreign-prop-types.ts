// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ForbidForeignPropTypes0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowInPropTypes?: boolean;
      },
    ];

export type ForbidForeignPropTypes = 'off' | ForbidForeignPropTypes0;
