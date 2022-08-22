// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ExportsStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'module.exports' | 'exports']
  | [
      'off' | 'error' | 'warn',
      'module.exports' | 'exports',
      {
        allowBatchAssign?: boolean;
      },
    ];

export type ExportsStyle = 'off' | ExportsStyle0;
