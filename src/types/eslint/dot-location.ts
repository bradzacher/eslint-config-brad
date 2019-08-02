// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type DotLocation0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("object" | "property")];

export type DotLocation = "off" | DotLocation0;
