// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type FuncNames0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', Value]
  | [
      'off' | 'error' | 'warn',
      Value,
      {
        generators?: Value;
      },
    ];
type Value = 'always' | 'as-needed' | 'never';

export type FuncNames = 'off' | FuncNames0;
