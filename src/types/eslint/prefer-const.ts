// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferConst0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        destructuring?: "any" | "all";
        ignoreReadBeforeAssign?: boolean;
      }
    ];

export type PreferConst = "off" | PreferConst0;
