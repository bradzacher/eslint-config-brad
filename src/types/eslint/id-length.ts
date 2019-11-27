// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type IdLength0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        min?: number;
        max?: number;
        exceptions?: string[];
        properties?: 'always' | 'never';
      },
    ];

export type IdLength = 'off' | IdLength0;
