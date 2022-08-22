// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMeaninglessVoidOperator0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkNever?: boolean;
      },
    ];

export type NoMeaninglessVoidOperator = 'off' | NoMeaninglessVoidOperator0;
