// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ForbidDomProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              propName?: string;
              message?: string;
              [k: string]: unknown;
            }
        )[];
      },
    ];

export type ForbidDomProps = 'off' | ForbidDomProps0;
