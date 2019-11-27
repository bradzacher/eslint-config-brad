// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type UseIsnan0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForSwitchCase?: boolean;
        enforceForIndexOf?: boolean;
      },
    ];

export type UseIsnan = 'off' | UseIsnan0;
