// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoRestrictedImports0 =
  | [
      ("off" | "error" | "warn"),
      ...(
        | string
        | {
            name: string;
            message?: string;
            importNames?: string[];
          })[]
    ]
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        paths?: [
          ("off" | "error" | "warn"),
          ...(
            | string
            | {
                name: string;
                message?: string;
                importNames?: string[];
              })[]
        ];
        patterns?: string[];
      }
    ];

export type NoRestrictedImports = "off" | NoRestrictedImports0;
