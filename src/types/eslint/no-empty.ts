// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoEmpty0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowEmptyCatch?: boolean;
      },
    ];

export type NoEmpty = 'off' | NoEmpty0;
