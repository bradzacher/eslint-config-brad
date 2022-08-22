// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoNamespace0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        [k: string]: unknown;
      },
    ];

export type NoNamespace = 'off' | NoNamespace0;
