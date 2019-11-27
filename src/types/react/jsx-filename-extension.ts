// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxFilenameExtension0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        extensions?: string[];
      },
    ];

export type JsxFilenameExtension = 'off' | JsxFilenameExtension0;
