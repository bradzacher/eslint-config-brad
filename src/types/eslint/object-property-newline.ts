// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ObjectPropertyNewline0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      },
    ];

export type ObjectPropertyNewline = 'off' | ObjectPropertyNewline0;
