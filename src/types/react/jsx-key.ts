// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxKey0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkFragmentShorthand?: boolean;
        checkKeyMustBeforeSpread?: boolean;
        warnOnDuplicates?: boolean;
      },
    ];

export type JsxKey = 'off' | JsxKey0;
