// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxTagSpacing0 = [
    ('off' | 'error' | 'warn'),
    {
        closingSlash?: 'always' | 'never' | 'allow';
        beforeSelfClosing?: 'always' | 'never' | 'allow';
        afterOpening?: 'always' | 'allow-multiline' | 'never' | 'allow';
        beforeClosing?: 'always' | 'never' | 'allow';
    },
];

export type JsxTagSpacing = 'off' | JsxTagSpacing0;
