// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type SelfClosingComp0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        component?: boolean;
        html?: boolean;
      },
    ];

export type SelfClosingComp = 'off' | SelfClosingComp0;
