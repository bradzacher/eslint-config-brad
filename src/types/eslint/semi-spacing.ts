// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SemiSpacing0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      },
    ];

export type SemiSpacing = 'off' | SemiSpacing0;
