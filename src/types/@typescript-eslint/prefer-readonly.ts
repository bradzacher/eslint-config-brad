// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferReadonly0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyInlineLambdas?: boolean;
        [k: string]: unknown;
      },
    ];

export type PreferReadonly = 'off' | PreferReadonly0;
