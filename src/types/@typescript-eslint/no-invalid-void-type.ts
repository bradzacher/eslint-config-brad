// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoInvalidVoidType0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInGenericTypeArguments?: boolean | string[];
      },
    ];

export type NoInvalidVoidType = 'off' | NoInvalidVoidType0;
