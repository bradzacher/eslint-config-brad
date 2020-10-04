// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoMagicNumbers0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        detectObjects?: boolean;
        enforceConst?: boolean;
        ignore?: (number | string)[];
        ignoreArrayIndexes?: boolean;
        ignoreDefaultValues?: boolean;
        ignoreNumericLiteralTypes?: boolean;
        ignoreEnums?: boolean;
        ignoreReadonlyClassProperties?: boolean;
      },
    ];

export type NoMagicNumbers = 'off' | NoMagicNumbers0;
