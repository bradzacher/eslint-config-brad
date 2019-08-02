// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoInternalModules0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        allow?: string[];
      }
    ];

export type NoInternalModules = "off" | NoInternalModules0;
