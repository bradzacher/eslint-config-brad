// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxNoTargetBlank0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        enforceDynamicLinks?: 'always' | 'never';
      },
    ];

export type JsxNoTargetBlank = 'off' | JsxNoTargetBlank0;
