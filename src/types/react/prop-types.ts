// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PropTypes0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        ignore?: string[];
        customValidators?: string[];
        skipUndeclared?: boolean;
      }
    ];

export type PropTypes = "off" | PropTypes0;
