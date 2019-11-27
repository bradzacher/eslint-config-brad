// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoEmptyFunction0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: (
          | 'functions'
          | 'arrowFunctions'
          | 'generatorFunctions'
          | 'methods'
          | 'generatorMethods'
          | 'getters'
          | 'setters'
          | 'constructors'
          | 'private-constructors'
          | 'protected-constructors'
        )[];
      },
    ];

export type NoEmptyFunction = 'off' | NoEmptyFunction0;
