// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type DynamicImportChunkname0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        importFunctions?: string[];
        webpackChunknameFormat?: string;
        [k: string]: unknown;
      },
    ];

export type DynamicImportChunkname = 'off' | DynamicImportChunkname0;
