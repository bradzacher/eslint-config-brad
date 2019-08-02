// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoBitwise0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        allow?: (
          | "^"
          | "|"
          | "&"
          | "<<"
          | ">>"
          | ">>>"
          | "^="
          | "|="
          | "&="
          | "<<="
          | ">>="
          | ">>>="
          | "~")[];
        int32Hint?: boolean;
      }
    ];

export type NoBitwise = "off" | NoBitwise0;
