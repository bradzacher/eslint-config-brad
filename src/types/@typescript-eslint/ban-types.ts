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
            | string
            | {
                message?: string;
                fixWith?: string;
              };
        };
      },
    ];

export type BanTypes = 'off' | BanTypes0;
