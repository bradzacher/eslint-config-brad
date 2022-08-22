// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RequireDefaultProps0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbidDefaultForRequired?: boolean;
        classes?: {
          [k: string]: unknown;
        };
        functions?: {
          [k: string]: unknown;
        };
        ignoreFunctionalComponents?: boolean;
      },
    ];

export type RequireDefaultProps = 'off' | RequireDefaultProps0;
