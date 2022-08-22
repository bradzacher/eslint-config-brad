// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoRedeclare0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        builtinGlobals?: boolean;
        ignoreDeclarationMerge?: boolean;
      },
    ];

export type NoRedeclare = 'off' | NoRedeclare0;
