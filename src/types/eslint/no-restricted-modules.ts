// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedModules0 =
    | [('off' | 'error' | 'warn')]
    | [
          ('off' | 'error' | 'warn'),
          {
              paths?: [('off' | 'error' | 'warn')];
              patterns?: string[];
          },
      ];

export type NoRestrictedModules = 'off' | NoRestrictedModules0;
