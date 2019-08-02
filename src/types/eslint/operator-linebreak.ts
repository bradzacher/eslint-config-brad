// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type OperatorLinebreak0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("after" | "before" | "none" | null)]
  | [
      ("off" | "error" | "warn"),
      ("after" | "before" | "none" | null),
      {
        overrides?: {
          anyOf?: "after" | "before" | "none" | "ignore";
          [k: string]: any;
        };
      }
    ];

export type OperatorLinebreak = "off" | OperatorLinebreak0;
