// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExtendNative0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        exceptions?: string[];
      },
    ];

export type NoExtendNative = 'off' | NoExtendNative0;
