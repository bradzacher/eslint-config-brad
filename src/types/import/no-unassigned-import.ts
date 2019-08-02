// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoUnassignedImport0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        devDependencies?: boolean | any[];
        optionalDependencies?: boolean | any[];
        peerDependencies?: boolean | any[];
        allow?: string[];
      }
    ];

export type NoUnassignedImport = "off" | NoUnassignedImport0;
