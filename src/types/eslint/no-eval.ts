// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoEval0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        allowIndirect?: boolean;
      }
    ];

export type NoEval = "off" | NoEval0;
