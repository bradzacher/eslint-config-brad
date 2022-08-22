// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type ForbidElements0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              element: string;
              message?: string;
            }
        )[];
      },
    ];

export type ForbidElements = 'off' | ForbidElements0;
