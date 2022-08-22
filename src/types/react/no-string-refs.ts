// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoStringRefs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noTemplateLiterals?: boolean;
      },
    ];

export type NoStringRefs = 'off' | NoStringRefs0;
