// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferExpectAssertions0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyFunctionsWithAsyncKeyword?: boolean;
        onlyFunctionsWithExpectInLoop?: boolean;
        onlyFunctionsWithExpectInCallback?: boolean;
      },
    ];

export type PreferExpectAssertions = 'off' | PreferExpectAssertions0;
