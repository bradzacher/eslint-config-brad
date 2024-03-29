// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type MaxStatements0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
      {
        ignoreTopLevelFunctions?: boolean;
      },
    ];

export type MaxStatements = 'off' | MaxStatements0;
