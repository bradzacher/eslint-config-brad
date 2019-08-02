// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NoExplicitAny0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        fixToUnknown?: boolean;
        ignoreRestArgs?: boolean;
      }
    ];

export type NoExplicitAny = "off" | NoExplicitAny0;
