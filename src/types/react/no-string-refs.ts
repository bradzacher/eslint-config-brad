// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoStringRefs0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noTemplateLiterals?: boolean;
      },
    ];

export type NoStringRefs = 'off' | NoStringRefs0;
