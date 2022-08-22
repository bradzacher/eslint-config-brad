// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RestrictTemplateExpressions0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowNumber?: boolean;
        allowBoolean?: boolean;
        allowAny?: boolean;
        allowNullish?: boolean;
        allowRegExp?: boolean;
        [k: string]: unknown;
      },
    ];

export type RestrictTemplateExpressions = 'off' | RestrictTemplateExpressions0;
