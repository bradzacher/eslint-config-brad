// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PaddedBlocks0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      (
        | ("always" | "never")
        | {
            blocks?: "always" | "never";
            switches?: "always" | "never";
            classes?: "always" | "never";
          })
    ]
  | [
      ("off" | "error" | "warn"),
      (
        | ("always" | "never")
        | {
            blocks?: "always" | "never";
            switches?: "always" | "never";
            classes?: "always" | "never";
          }),
      {
        allowSingleLineBlocks?: boolean;
        [k: string]: any;
      }
    ];

export type PaddedBlocks = "off" | PaddedBlocks0;
