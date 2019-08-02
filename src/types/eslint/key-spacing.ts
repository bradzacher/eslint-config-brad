// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type KeySpacing0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      (
        | {
            align?:
              | ("colon" | "value")
              | {
                  mode?: "strict" | "minimum";
                  on?: "colon" | "value";
                  beforeColon?: boolean;
                  afterColon?: boolean;
                };
            mode?: "strict" | "minimum";
            beforeColon?: boolean;
            afterColon?: boolean;
          }
        | {
            singleLine?: {
              mode?: "strict" | "minimum";
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              align?:
                | ("colon" | "value")
                | {
                    mode?: "strict" | "minimum";
                    on?: "colon" | "value";
                    beforeColon?: boolean;
                    afterColon?: boolean;
                  };
              mode?: "strict" | "minimum";
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
        | {
            singleLine?: {
              mode?: "strict" | "minimum";
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              mode?: "strict" | "minimum";
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            align?: {
              mode?: "strict" | "minimum";
              on?: "colon" | "value";
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          })
    ];

export type KeySpacing = "off" | KeySpacing0;
