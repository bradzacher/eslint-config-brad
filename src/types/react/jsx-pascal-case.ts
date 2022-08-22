// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxPascalCase0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAllCaps?: boolean;
        allowLeadingUnderscore?: boolean;
        allowNamespace?: boolean;
        /**
         * @minItems 0
         */
        ignore?: [] | [string];
      },
    ];

export type JsxPascalCase = 'off' | JsxPascalCase0;
