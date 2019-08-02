// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoNativeReassign0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        exceptions?: string[];
      }
    ];

export type NoNativeReassign = "off" | NoNativeReassign0;
