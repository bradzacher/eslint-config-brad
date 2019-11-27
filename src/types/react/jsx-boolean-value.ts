// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxBooleanValue0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always']
  | [
      'off' | 'error' | 'warn',
      'always',
      {
        never?: string[];
      },
    ]
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never']
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        always?: string[];
      },
    ];

export type JsxBooleanValue = 'off' | JsxBooleanValue0;
