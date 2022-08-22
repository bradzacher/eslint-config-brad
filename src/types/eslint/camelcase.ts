// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Camelcase0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDestructuring?: boolean;
        ignoreImports?: boolean;
        ignoreGlobals?: boolean;
        properties?: 'always' | 'never';
        /**
         * @minItems 0
         */
        allow?: [] | [string];
      },
    ];

export type Camelcase = 'off' | Camelcase0;
