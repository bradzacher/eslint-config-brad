// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoChildrenProp0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowFunctions?: boolean;
      },
    ];

export type NoChildrenProp = 'off' | NoChildrenProp0;
