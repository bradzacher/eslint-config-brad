// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type BraceStyle0 =
  | []
  | [("off" | "error" | "warn")]
  | [("off" | "error" | "warn"), ("1tbs" | "stroustrup" | "allman")]
  | [
      ("off" | "error" | "warn"),
      ("1tbs" | "stroustrup" | "allman"),
      {
        allowSingleLine?: boolean;
      }
    ];

export type BraceStyle = "off" | BraceStyle0;
