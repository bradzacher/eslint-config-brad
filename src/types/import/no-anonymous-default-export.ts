// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoAnonymousDefaultExport0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * If `false`, will report default of an array
         */
        allowArray?: boolean;
        /**
         * If `false`, will report default of an arrow function
         */
        allowArrowFunction?: boolean;
        /**
         * If `false`, will report default of a function call
         */
        allowCallExpression?: boolean;
        /**
         * If `false`, will report default of an anonymous class
         */
        allowAnonymousClass?: boolean;
        /**
         * If `false`, will report default of an anonymous function
         */
        allowAnonymousFunction?: boolean;
        /**
         * If `false`, will report default of a literal
         */
        allowLiteral?: boolean;
        /**
         * If `false`, will report default of an object expression
         */
        allowObject?: boolean;
      },
    ];

export type NoAnonymousDefaultExport = 'off' | NoAnonymousDefaultExport0;
