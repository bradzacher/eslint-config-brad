// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnnecessaryCondition0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowConstantLoopConditions?: boolean;
        ignoreRhs?: boolean;
      },
    ];

export type NoUnnecessaryCondition = 'off' | NoUnnecessaryCondition0;
