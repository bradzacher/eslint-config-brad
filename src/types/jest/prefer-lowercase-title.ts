// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferLowercaseTitle0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: ('describe' | 'test' | 'it')[];
        allowedPrefixes?: string[];
        ignoreTopLevelDescribe?: boolean;
      },
    ];

export type PreferLowercaseTitle = 'off' | PreferLowercaseTitle0;
