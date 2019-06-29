// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type LinesAroundComment0 = [
    ('off' | 'error' | 'warn'),
    {
        beforeBlockComment?: boolean;
        afterBlockComment?: boolean;
        beforeLineComment?: boolean;
        afterLineComment?: boolean;
        allowBlockStart?: boolean;
        allowBlockEnd?: boolean;
        allowClassStart?: boolean;
        allowClassEnd?: boolean;
        allowObjectStart?: boolean;
        allowObjectEnd?: boolean;
        allowArrayStart?: boolean;
        allowArrayEnd?: boolean;
        ignorePattern?: string;
        applyDefaultIgnorePatterns?: boolean;
    },
];

export type LinesAroundComment = 'off' | LinesAroundComment0;
