// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoSelfAssign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        props?: boolean;
      },
    ];

export type NoSelfAssign = 'off' | NoSelfAssign0;
