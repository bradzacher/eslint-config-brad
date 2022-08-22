// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type DestructuringAssignment0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        ignoreClassFields?: boolean;
        destructureInSignature?: 'always' | 'ignore';
      },
    ];

export type DestructuringAssignment = 'off' | DestructuringAssignment0;
