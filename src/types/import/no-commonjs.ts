// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoCommonjs0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'allow-primitive-modules']
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowPrimitiveModules?: boolean;
        allowRequire?: boolean;
        allowConditionalRequire?: boolean;
      },
    ];

export type NoCommonjs = 'off' | NoCommonjs0;
