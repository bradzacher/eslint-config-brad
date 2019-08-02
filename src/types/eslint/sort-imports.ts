// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type SortImports0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        ignoreCase?: boolean;
        memberSyntaxSortOrder?: [
          ("none" | "all" | "multiple" | "single"),
          ("none" | "all" | "multiple" | "single"),
          ("none" | "all" | "multiple" | "single"),
          ("none" | "all" | "multiple" | "single")
        ];
        ignoreDeclarationSort?: boolean;
        ignoreMemberSort?: boolean;
      }
    ];

export type SortImports = "off" | SortImports0;
