// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type RequireOptimization0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowDecorators?: string[];
      },
    ];

export type RequireOptimization = 'off' | RequireOptimization0;
