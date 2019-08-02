// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type WrapIife0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("outside" | "inside" | "any")]
  | [
      ("off" | "error" | "warn"),
      ("outside" | "inside" | "any"),
      {
        functionPrototypeMethods?: boolean;
      }
    ];

export type WrapIife = "off" | WrapIife0;
