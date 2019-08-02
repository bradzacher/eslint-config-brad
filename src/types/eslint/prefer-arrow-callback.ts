// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferArrowCallback0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowNamedFunctions?: boolean;
        allowUnboundThis?: boolean;
      },
    ];

export type PreferArrowCallback = 'off' | PreferArrowCallback0;
