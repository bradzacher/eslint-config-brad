// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SortVars0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        ignoreCase?: boolean;
      }
    ];

export type SortVars = "off" | SortVars0;
