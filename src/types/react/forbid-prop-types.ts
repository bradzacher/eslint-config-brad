// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ForbidPropTypes0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: string[];
        checkContextTypes?: boolean;
        checkChildContextTypes?: boolean;
        [k: string]: unknown;
      },
    ];

export type ForbidPropTypes = 'off' | ForbidPropTypes0;
