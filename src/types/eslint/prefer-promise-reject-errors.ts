// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type PreferPromiseRejectErrors0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowEmptyReject?: boolean;
      },
    ];

export type PreferPromiseRejectErrors = 'off' | PreferPromiseRejectErrors0;
