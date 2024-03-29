// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ExplicitFunctionReturnType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowExpressions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        allowHigherOrderFunctions?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
        allowedNames?: string[];
      },
    ];

export type ExplicitFunctionReturnType = 'off' | ExplicitFunctionReturnType0;
