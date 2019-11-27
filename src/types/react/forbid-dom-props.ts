// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ForbidDomProps0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: string[];
      },
    ];

export type ForbidDomProps = 'off' | ForbidDomProps0;
