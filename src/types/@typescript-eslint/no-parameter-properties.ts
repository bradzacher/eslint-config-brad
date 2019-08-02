// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoParameterProperties0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allows?: [
          (
            | 'readonly'
            | 'private'
            | 'protected'
            | 'public'
            | 'private readonly'
            | 'protected readonly'
            | 'public readonly'),
          ...(
            | 'readonly'
            | 'private'
            | 'protected'
            | 'public'
            | 'private readonly'
            | 'protected readonly'
            | 'public readonly')[],
        ];
      },
    ];

export type NoParameterProperties = 'off' | NoParameterProperties0;
