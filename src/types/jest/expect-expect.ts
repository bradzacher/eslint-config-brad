// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type ExpectExpect0 =
  | []
  | [("off" | "error" | "warn")]
  | [
      ("off" | "error" | "warn"),
      {
        assertFunctionNames?: [] | [string];
      }
    ];

export type ExpectExpect = "off" | ExpectExpect0;
