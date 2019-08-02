// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoTrailingSpaces0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        skipBlankLines?: boolean;
        ignoreComments?: boolean;
      }
    ];

export type NoTrailingSpaces = "off" | NoTrailingSpaces0;
