// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ValidTypeof0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        requireStringLiterals?: boolean;
      },
    ];

export type ValidTypeof = 'off' | ValidTypeof0;
