// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type Order0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: unknown[];
        pathGroupsExcludedImportTypes?: unknown[];
        pathGroups?: {
          pattern: string;
          patternOptions?: {
            [k: string]: unknown;
          };
          group:
            | 'builtin'
            | 'external'
            | 'internal'
            | 'unknown'
            | 'parent'
            | 'sibling'
            | 'index'
            | 'object'
            | 'type';
          position?: 'after' | 'before';
          [k: string]: unknown;
        }[];
        'newlines-between'?:
          | 'ignore'
          | 'always'
          | 'always-and-inside-groups'
          | 'never';
        alphabetize?: {
          caseInsensitive?: boolean;
          order?: 'ignore' | 'asc' | 'desc';
        };
        warnOnUnassignedImports?: boolean;
      },
    ];

export type Order = 'off' | Order0;
