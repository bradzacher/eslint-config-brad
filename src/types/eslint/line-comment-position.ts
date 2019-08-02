// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type LineCommentPosition0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      (
        | ("above" | "beside")
        | {
            position?: "above" | "beside";
            ignorePattern?: string;
            applyDefaultPatterns?: boolean;
            applyDefaultIgnorePatterns?: boolean;
          })
    ];

export type LineCommentPosition = "off" | LineCommentPosition0;
