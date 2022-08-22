// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoDynamicRequire0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        esmodule?: boolean;
      },
    ];

export type NoDynamicRequire = 'off' | NoDynamicRequire0;
