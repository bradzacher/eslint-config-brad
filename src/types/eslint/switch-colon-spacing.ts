// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type SwitchColonSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      },
    ];

export type SwitchColonSpacing = 'off' | SwitchColonSpacing0;
