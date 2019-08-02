// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoLargeSnapshots0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        maxSize?: number;
      }
    ];

export type NoLargeSnapshots = "off" | NoLargeSnapshots0;
