// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RestrictTemplateExpressions0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowBoolean?: boolean;
        allowNullable?: boolean;
        allowNumber?: boolean;
        [k: string]: any;
      },
    ];

export type RestrictTemplateExpressions = 'off' | RestrictTemplateExpressions0;
