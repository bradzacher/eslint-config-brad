// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUndef0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        typeof?: boolean;
      }
    ];

export type NoUndef = "off" | NoUndef0;
