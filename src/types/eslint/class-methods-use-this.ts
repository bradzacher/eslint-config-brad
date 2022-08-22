// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ClassMethodsUseThis0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptMethods?: string[];
        enforceForClassFields?: boolean;
      },
    ];

export type ClassMethodsUseThis = 'off' | ClassMethodsUseThis0;
