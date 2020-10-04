// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoShadow0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        builtinGlobals?: boolean;
        hoist?: 'all' | 'functions' | 'never';
        allow?: string[];
        ignoreTypeValueShadow?: boolean;
        ignoreFunctionTypeParameterNameValueShadow?: boolean;
      },
    ];

export type NoShadow = 'off' | NoShadow0;
