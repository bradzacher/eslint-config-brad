// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MemberNaming0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        public?: string;
        protected?: string;
        private?: string;
      }
    ];

export type MemberNaming = "off" | MemberNaming0;
