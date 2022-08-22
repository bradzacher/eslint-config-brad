// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ValidTitle0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTypeOfDescribeName?: boolean;
        disallowedWords?: string[];
        mustMatch?:
          | string
          | [string]
          | [string, string]
          | {
              [k: string]: string | [string] | [string, string];
            };
        mustNotMatch?:
          | string
          | [string]
          | [string, string]
          | {
              [k: string]: string | [string] | [string, string];
            };
      },
    ];

export type ValidTitle = 'off' | ValidTitle0;
