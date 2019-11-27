// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type JsxHandlerNames0 =
  | []
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: string;
          }
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: false;
          }
        | {
            eventHandlerPrefix?: false;
            eventHandlerPropPrefix?: string;
          }
      ),
    ];

export type JsxHandlerNames = 'off' | JsxHandlerNames0;
