// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type IdMatch0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string]
  | [
      'off' | 'error' | 'warn',
      string,
      {
        properties?: boolean;
        classFields?: boolean;
        onlyDeclarations?: boolean;
        ignoreDestructuring?: boolean;
      },
    ];

export type IdMatch = 'off' | IdMatch0;
