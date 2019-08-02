// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type InitDeclarations0 =
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), "always"]
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), "never"]
  | [
      ("off" | "error" | "warn"),
      "never",
      {
        ignoreForLoopInit?: boolean;
      }
    ];

export type InitDeclarations = "off" | InitDeclarations0;
