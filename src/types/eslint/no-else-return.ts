// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoElseReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowElseIf?: boolean;
      },
    ];

export type NoElseReturn = 'off' | NoElseReturn0;
