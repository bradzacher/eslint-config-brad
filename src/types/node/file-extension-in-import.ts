// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type FileExtensionInImport0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        tryExtensions?: string[];
      } & {
        [k: string]: 'always' | 'never';
      },
    ];

export type FileExtensionInImport = 'off' | FileExtensionInImport0;
