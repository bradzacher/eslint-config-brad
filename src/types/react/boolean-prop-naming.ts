// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type BooleanPropNaming0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        propTypeNames?: [string, ...string[]];
        rule?: string;
        message?: string;
        validateNested?: boolean;
      },
    ];

export type BooleanPropNaming = 'off' | BooleanPropNaming0;
