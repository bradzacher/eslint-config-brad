// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoMisusedPromises0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        checksConditionals?: boolean;
        checksVoidReturn?: boolean;
        [k: string]: any;
      }
    ];

export type NoMisusedPromises = "off" | NoMisusedPromises0;
