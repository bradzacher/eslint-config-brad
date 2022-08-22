// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoImplicitCoercion0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        disallowTemplateShorthand?: boolean;
        allow?: ('~' | '!!' | '+' | '*')[];
      },
    ];

export type NoImplicitCoercion = 'off' | NoImplicitCoercion0;
