// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoNamespace0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowDeclarations?: boolean;
        allowDefinitionFiles?: boolean;
      },
    ];

export type NoNamespace = 'off' | NoNamespace0;
