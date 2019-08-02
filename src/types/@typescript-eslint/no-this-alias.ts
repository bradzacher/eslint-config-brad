// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoThisAlias0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowDestructuring?: boolean;
        allowedNames?: string[];
      },
    ];

export type NoThisAlias = 'off' | NoThisAlias0;
