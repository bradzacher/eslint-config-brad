// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type InitDeclarations0 =
  | ['off' | 'error' | 'warn', 'always']
  | ['off' | 'error' | 'warn', 'always', unknown]
  | ['off' | 'error' | 'warn', 'never']
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        ignoreForLoopInit?: boolean;
      },
    ]
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        ignoreForLoopInit?: boolean;
      },
      unknown,
    ];

export type InitDeclarations = 'off' | InitDeclarations0;
