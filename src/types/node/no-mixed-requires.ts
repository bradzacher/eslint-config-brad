// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMixedRequires0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | boolean
        | {
            grouping?: boolean;
            allowCall?: boolean;
          }
      ),
    ];

export type NoMixedRequires = 'off' | NoMixedRequires0;
