// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ButtonHasType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        button?: boolean;
        submit?: boolean;
        reset?: boolean;
      },
    ];

export type ButtonHasType = 'off' | ButtonHasType0;
