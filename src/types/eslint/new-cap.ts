// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NewCap0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        newIsCap?: boolean;
        capIsNew?: boolean;
        newIsCapExceptions?: string[];
        newIsCapExceptionPattern?: string;
        capIsNewExceptions?: string[];
        capIsNewExceptionPattern?: string;
        properties?: boolean;
      },
    ];

export type NewCap = 'off' | NewCap0;
