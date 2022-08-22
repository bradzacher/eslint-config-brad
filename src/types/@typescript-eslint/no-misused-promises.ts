// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMisusedPromises0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checksConditionals?: boolean;
        checksVoidReturn?:
          | boolean
          | {
              arguments?: boolean;
              attributes?: boolean;
              properties?: boolean;
              returns?: boolean;
              variables?: boolean;
            };
        checksSpreads?: boolean;
        [k: string]: unknown;
      },
    ];

export type NoMisusedPromises = 'off' | NoMisusedPromises0;
