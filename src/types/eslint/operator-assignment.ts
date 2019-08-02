// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type OperatorAssignment0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("always" | "never")];

export type OperatorAssignment = "off" | OperatorAssignment0;
