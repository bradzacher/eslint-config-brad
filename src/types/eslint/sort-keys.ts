// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SortKeys0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [('off' | 'error' | 'warn'), ('asc' | 'desc')]
  | [
      ('off' | 'error' | 'warn'),
      ('asc' | 'desc'),
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
      },
    ];

export type SortKeys = 'off' | SortKeys0;
