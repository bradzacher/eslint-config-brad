// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type CommaSpacing0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        before?: boolean;
        after?: boolean;
      }
    ];

export type CommaSpacing = "off" | CommaSpacing0;
