// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoMultiComp0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreStateless?: boolean;
      },
    ];

export type NoMultiComp = 'off' | NoMultiComp0;
