// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ParameterProperties0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        allow?: [
          (
            | 'readonly'
            | 'private'
            | 'protected'
            | 'public'
            | 'private readonly'
            | 'protected readonly'
            | 'public readonly'
          ),
          ...(
            | 'readonly'
            | 'private'
            | 'protected'
            | 'public'
            | 'private readonly'
            | 'protected readonly'
            | 'public readonly'
          )[],
        ];
        prefer?: 'class-property' | 'parameter-property';
      },
    ];

export type ParameterProperties = 'off' | ParameterProperties0;
