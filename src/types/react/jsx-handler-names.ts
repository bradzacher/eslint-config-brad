// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type JsxHandlerNames0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: string;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: false;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            eventHandlerPrefix?: false;
            eventHandlerPropPrefix?: string;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            checkLocalVariables?: boolean;
          }
        | {
            checkInlineFunction?: boolean;
          }
      ),
    ];

export type JsxHandlerNames = 'off' | JsxHandlerNames0;
