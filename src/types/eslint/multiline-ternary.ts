// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MultilineTernary0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("always" | "always-multiline" | "never")];

export type MultilineTernary = "off" | MultilineTernary0;
