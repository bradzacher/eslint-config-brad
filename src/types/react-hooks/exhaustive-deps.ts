// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ExhaustiveDeps0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        additionalHooks?: string;
      },
    ];

export type ExhaustiveDeps = 'off' | ExhaustiveDeps0;
