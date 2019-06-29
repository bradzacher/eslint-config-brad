// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUseBeforeDefine0 = [
    ('off' | 'error' | 'warn'),
    (
        | 'nofunc'
        | {
              functions?: boolean;
              classes?: boolean;
              variables?: boolean;
              typedefs?: boolean;
          }),
];

export type NoUseBeforeDefine = 'off' | NoUseBeforeDefine0;
