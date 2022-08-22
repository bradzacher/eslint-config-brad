// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type RequireTopLevelDescribe0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maxNumberOfTopLevelDescribes?: number;
      },
    ];

export type RequireTopLevelDescribe = 'off' | RequireTopLevelDescribe0;
