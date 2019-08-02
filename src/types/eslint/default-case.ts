// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type DefaultCase0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        commentPattern?: string;
      }
    ];

export type DefaultCase = "off" | DefaultCase0;
