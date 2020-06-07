// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ExplicitModuleBoundaryTypes0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowArgumentsExplicitlyTypedAsAny?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowedNames?: string[];
        allowHigherOrderFunctions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        shouldTrackReferences?: boolean;
      },
    ];

export type ExplicitModuleBoundaryTypes = 'off' | ExplicitModuleBoundaryTypes0;
