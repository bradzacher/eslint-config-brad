// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ArrayCallbackReturn0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowImplicit?: boolean;
        checkForEach?: boolean;
      },
    ];

export type ArrayCallbackReturn = 'off' | ArrayCallbackReturn0;
