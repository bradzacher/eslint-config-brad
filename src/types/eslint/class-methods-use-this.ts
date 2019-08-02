// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ClassMethodsUseThis0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        exceptMethods?: string[];
      },
    ];

export type ClassMethodsUseThis = 'off' | ClassMethodsUseThis0;
