// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type HandleCallbackErr0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), string];

export type HandleCallbackErr = "off" | HandleCallbackErr0;
