// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUntypedPublicSignature0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoredMethods?: string[];
        [k: string]: any;
      },
    ];

export type NoUntypedPublicSignature = 'off' | NoUntypedPublicSignature0;
