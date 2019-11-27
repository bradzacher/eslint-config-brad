// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ValidJsdoc0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prefer?: {
          [k: string]: string;
        };
        preferType?: {
          [k: string]: string;
        };
        requireReturn?: boolean;
        requireParamDescription?: boolean;
        requireReturnDescription?: boolean;
        matchDescription?: string;
        requireReturnType?: boolean;
        requireParamType?: boolean;
      },
    ];

export type ValidJsdoc = 'off' | ValidJsdoc0;
