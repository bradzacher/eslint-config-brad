// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ForbidComponentProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              propName?: string;
              allowedFor?: string[];
              message?: string;
              [k: string]: unknown;
            }
        )[];
        [k: string]: unknown;
      },
    ];

export type ForbidComponentProps = 'off' | ForbidComponentProps0;
