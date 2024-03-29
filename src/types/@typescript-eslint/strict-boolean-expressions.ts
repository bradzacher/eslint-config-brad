// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type StrictBooleanExpressions0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowString?: boolean;
        allowNumber?: boolean;
        allowNullableObject?: boolean;
        allowNullableBoolean?: boolean;
        allowNullableString?: boolean;
        allowNullableNumber?: boolean;
        allowAny?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      },
    ];

export type StrictBooleanExpressions = 'off' | StrictBooleanExpressions0;
