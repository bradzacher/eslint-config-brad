// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type PreferStatelessFunction0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignorePureComponents?: boolean;
      },
    ];

export type PreferStatelessFunction = 'off' | PreferStatelessFunction0;
