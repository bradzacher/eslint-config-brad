// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NewlinePerChainedCall0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        ignoreChainWithDepth?: number;
      }
    ];

export type NewlinePerChainedCall = "off" | NewlinePerChainedCall0;
