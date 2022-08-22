// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type SortTypeUnionIntersectionMembers0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkIntersections?: boolean;
        checkUnions?: boolean;
        groupOrder?: (
          | 'conditional'
          | 'function'
          | 'import'
          | 'intersection'
          | 'keyword'
          | 'nullish'
          | 'literal'
          | 'named'
          | 'object'
          | 'operator'
          | 'tuple'
          | 'union'
        )[];
        [k: string]: unknown;
      },
    ];

export type SortTypeUnionIntersectionMembers =
  | 'off'
  | SortTypeUnionIntersectionMembers0;
