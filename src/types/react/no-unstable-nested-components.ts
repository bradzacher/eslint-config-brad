// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnstableNestedComponents0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        customValidators?: string[];
        allowAsProps?: boolean;
      },
    ];

export type NoUnstableNestedComponents = 'off' | NoUnstableNestedComponents0;
