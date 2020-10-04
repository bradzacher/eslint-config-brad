// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoStandaloneExpect0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        additionalTestBlockFunctions?: string[];
      },
    ];

export type NoStandaloneExpect = 'off' | NoStandaloneExpect0;
