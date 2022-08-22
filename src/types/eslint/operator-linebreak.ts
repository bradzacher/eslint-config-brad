// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type OperatorLinebreak0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'after' | 'before' | 'none' | null]
  | [
      'off' | 'error' | 'warn',
      'after' | 'before' | 'none' | null,
      {
        overrides?: {
          [k: string]: 'after' | 'before' | 'none' | 'ignore';
        };
      },
    ];

export type OperatorLinebreak = 'off' | OperatorLinebreak0;
