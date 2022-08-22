// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoConsole0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
      },
    ];

export type NoConsole = 'off' | NoConsole0;
