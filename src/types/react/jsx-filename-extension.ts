// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxFilenameExtension0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: 'always' | 'as-needed';
        extensions?: string[];
      },
    ];

export type JsxFilenameExtension = 'off' | JsxFilenameExtension0;
