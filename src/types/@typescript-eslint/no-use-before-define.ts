// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUseBeforeDefine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | 'nofunc'
        | {
            functions?: boolean;
            classes?: boolean;
            enums?: boolean;
            variables?: boolean;
            typedefs?: boolean;
            ignoreTypeReferences?: boolean;
            allowNamedExports?: boolean;
          }
      ),
    ];

export type NoUseBeforeDefine = 'off' | NoUseBeforeDefine0;
