// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type BanTypes0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        types?: {
          [k: string]:
            | null
            | boolean
            | string
            | {
                message?: string;
                fixWith?: string;
              };
        };
        extendDefaults?: boolean;
      },
    ];

export type BanTypes = 'off' | BanTypes0;
