// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type DynamicImportChunkname0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        importFunctions?: string[];
        webpackChunknameFormat?: string;
        [k: string]: any;
      },
    ];

export type DynamicImportChunkname = 'off' | DynamicImportChunkname0;
