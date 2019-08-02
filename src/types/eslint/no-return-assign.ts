// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoReturnAssign0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("except-parens" | "always")];

export type NoReturnAssign = "off" | NoReturnAssign0;
