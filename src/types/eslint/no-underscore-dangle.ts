// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnderscoreDangle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
        allowAfterThis?: boolean;
        allowAfterSuper?: boolean;
        allowAfterThisConstructor?: boolean;
        enforceInMethodNames?: boolean;
      },
    ];

export type NoUnderscoreDangle = 'off' | NoUnderscoreDangle0;
