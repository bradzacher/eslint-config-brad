// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PreferDestructuring0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      (
        | {
            VariableDeclarator?: {
              array?: boolean;
              object?: boolean;
            };
            AssignmentExpression?: {
              array?: boolean;
              object?: boolean;
            };
          }
        | {
            array?: boolean;
            object?: boolean;
          })
    ]
  | [
      ("off" | "error" | "warn"),
      (
        | {
            VariableDeclarator?: {
              array?: boolean;
              object?: boolean;
            };
            AssignmentExpression?: {
              array?: boolean;
              object?: boolean;
            };
          }
        | {
            array?: boolean;
            object?: boolean;
          }),
      {
        enforceForRenamedProperties?: boolean;
      }
    ];

export type PreferDestructuring = "off" | PreferDestructuring0;
