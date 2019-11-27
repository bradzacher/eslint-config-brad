// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoParamReassign0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            props?: false;
          }
        | {
            props?: true;
            ignorePropertyModificationsFor?: string[];
            ignorePropertyModificationsForRegex?: string[];
          }
      ),
    ];

export type NoParamReassign = 'off' | NoParamReassign0;
