// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ForbidComponentProps0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              propName?: string;
              allowedFor?: string[];
              [k: string]: any;
            }
        )[];
        [k: string]: any;
      },
    ];

export type ForbidComponentProps = 'off' | ForbidComponentProps0;
