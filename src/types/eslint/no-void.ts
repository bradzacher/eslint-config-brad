// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoVoid0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAsStatement?: boolean;
      },
    ];

export type NoVoid = 'off' | NoVoid0;
