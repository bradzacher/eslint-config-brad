// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ExplicitFunctionReturnType0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowExpressions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        allowHigherOrderFunctions?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
      },
    ];

export type ExplicitFunctionReturnType = 'off' | ExplicitFunctionReturnType0;
