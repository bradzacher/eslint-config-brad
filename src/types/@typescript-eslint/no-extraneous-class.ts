// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoExtraneousClass0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowConstructorOnly?: boolean;
        allowEmpty?: boolean;
        allowStaticOnly?: boolean;
        allowWithDecorator?: boolean;
      },
    ];

export type NoExtraneousClass = 'off' | NoExtraneousClass0;
