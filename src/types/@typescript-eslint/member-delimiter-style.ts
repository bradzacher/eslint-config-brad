// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MemberDelimiterStyle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        multiline?: {
          delimiter?: 'none' | 'semi' | 'comma';
          requireLast?: boolean;
        };
        singleline?: {
          delimiter?: 'semi' | 'comma';
          requireLast?: boolean;
        };
        overrides?: {
          interface?: {
            multiline?: {
              delimiter?: 'none' | 'semi' | 'comma';
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: 'semi' | 'comma';
              requireLast?: boolean;
            };
          };
          typeLiteral?: {
            multiline?: {
              delimiter?: 'none' | 'semi' | 'comma';
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: 'semi' | 'comma';
              requireLast?: boolean;
            };
          };
        };
      },
    ];

export type MemberDelimiterStyle = 'off' | MemberDelimiterStyle0;
