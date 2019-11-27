// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type IndentLegacy0 =
  | []
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'tab' | number]
  | [
      'off' | 'error' | 'warn',
      'tab' | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | number
          | {
              var?: number;
              let?: number;
              const?: number;
              [k: string]: any;
            };
        outerIIFEBody?: number;
        MemberExpression?: number;
        FunctionDeclaration?: {
          parameters?: number | 'first';
          body?: number;
          [k: string]: any;
        };
        FunctionExpression?: {
          parameters?: number | 'first';
          body?: number;
          [k: string]: any;
        };
        CallExpression?: {
          parameters?: number | 'first';
          [k: string]: any;
        };
        ArrayExpression?: number | 'first';
        ObjectExpression?: number | 'first';
      },
    ];

export type IndentLegacy = 'off' | IndentLegacy0;
