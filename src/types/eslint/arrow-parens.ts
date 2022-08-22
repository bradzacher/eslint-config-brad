// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ArrowParens0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed']
  | [
      'off' | 'error' | 'warn',
      'always' | 'as-needed',
      {
        requireForBlockBody?: boolean;
      },
    ];

export type ArrowParens = 'off' | ArrowParens0;
