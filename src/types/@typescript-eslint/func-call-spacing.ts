// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type FuncCallSpacing0 =
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), "never"]
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), "always"]
  | [
      ("off" | "error" | "warn"),
      "always",
      {
        allowNewlines?: boolean;
      }
    ];

export type FuncCallSpacing = "off" | FuncCallSpacing0;
