// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type StaticPropertyPlacement0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      ("static public field" | "static getter" | "property assignment")
    ]
  | [
      ("off" | "error" | "warn"),
      ("static public field" | "static getter" | "property assignment"),
      {
        propTypes?:
          | "static public field"
          | "static getter"
          | "property assignment";
        defaultProps?:
          | "static public field"
          | "static getter"
          | "property assignment";
        childContextTypes?:
          | "static public field"
          | "static getter"
          | "property assignment";
        contextTypes?:
          | "static public field"
          | "static getter"
          | "property assignment";
        contextType?:
          | "static public field"
          | "static getter"
          | "property assignment";
        displayName?:
          | "static public field"
          | "static getter"
          | "property assignment";
      }
    ];

export type StaticPropertyPlacement = "off" | StaticPropertyPlacement0;
