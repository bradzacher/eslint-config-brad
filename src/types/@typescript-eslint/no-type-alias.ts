// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoTypeAlias0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAliases?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        allowCallbacks?: 'always' | 'never';
        allowConditionalTypes?: 'always' | 'never';
        allowConstructors?: 'always' | 'never';
        allowLiterals?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        allowMappedTypes?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        allowTupleTypes?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
      },
    ];

export type NoTypeAlias = 'off' | NoTypeAlias0;
