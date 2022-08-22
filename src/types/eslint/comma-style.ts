// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type CommaStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'first' | 'last']
  | [
      'off' | 'error' | 'warn',
      'first' | 'last',
      {
        exceptions?: {
          [k: string]: boolean;
        };
      },
    ];

export type CommaStyle = 'off' | CommaStyle0;
