// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoDuplicateImports0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        includeExports?: boolean;
      },
    ];

export type NoDuplicateImports = 'off' | NoDuplicateImports0;
