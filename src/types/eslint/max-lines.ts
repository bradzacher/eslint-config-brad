// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MaxLines0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      (
        | number
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
          })
    ];

export type MaxLines = "off" | MaxLines0;
