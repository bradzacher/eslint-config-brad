// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ConsistentTypeImports0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prefer?: 'type-imports' | 'no-type-imports';
        disallowTypeAnnotations?: boolean;
      },
    ];

export type ConsistentTypeImports = 'off' | ConsistentTypeImports0;
