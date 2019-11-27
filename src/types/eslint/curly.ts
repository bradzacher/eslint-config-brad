// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Curly0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'all']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'multi' | 'multi-line' | 'multi-or-nest']
  | [
      'off' | 'error' | 'warn',
      'multi' | 'multi-line' | 'multi-or-nest',
      'consistent',
    ];

export type Curly = 'off' | Curly0;
