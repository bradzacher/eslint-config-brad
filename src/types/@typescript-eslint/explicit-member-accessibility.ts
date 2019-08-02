// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ExplicitMemberAccessibility0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        accessibility?: "explicit" | "no-public" | "off";
        overrides?: {
          accessors?: "explicit" | "no-public" | "off";
          constructors?: "explicit" | "no-public" | "off";
          methods?: "explicit" | "no-public" | "off";
          properties?: "explicit" | "no-public" | "off";
          parameterProperties?: "explicit" | "no-public" | "off";
        };
      }
    ];

export type ExplicitMemberAccessibility = "off" | ExplicitMemberAccessibility0;
