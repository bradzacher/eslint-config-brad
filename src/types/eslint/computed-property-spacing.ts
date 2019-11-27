// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ComputedPropertySpacing0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        enforceForClassMembers?: boolean;
      },
    ];

export type ComputedPropertySpacing = 'off' | ComputedPropertySpacing0;
