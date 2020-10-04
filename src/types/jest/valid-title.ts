// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ValidTitle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTypeOfDescribeName?: boolean;
        disallowedWords?: string[];
        mustNotMatch?:
          | string
          | {
              describe?: string;
              test?: string;
              it?: string;
            };
        mustMatch?:
          | string
          | {
              describe?: string;
              test?: string;
              it?: string;
            };
      },
    ];

export type ValidTitle = 'off' | ValidTitle0;
