// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Indent0 = [
    ('off' | 'error' | 'warn'),
    ('tab' | number),
    {
        SwitchCase?: number;
        VariableDeclarator?:
            | (number | ('first' | 'off'))
            | {
                  var?: number | ('first' | 'off');
                  let?: number | ('first' | 'off');
                  const?: number | ('first' | 'off');
              };
        outerIIFEBody?: number;
        MemberExpression?: number | 'off';
        FunctionDeclaration?: {
            parameters?: number | ('first' | 'off');
            body?: number;
        };
        FunctionExpression?: {
            parameters?: number | ('first' | 'off');
            body?: number;
        };
        CallExpression?: {
            arguments?: number | ('first' | 'off');
        };
        ArrayExpression?: number | ('first' | 'off');
        ObjectExpression?: number | ('first' | 'off');
        ImportDeclaration?: number | ('first' | 'off');
        flatTernaryExpressions?: boolean;
        ignoredNodes?: string[];
        ignoreComments?: boolean;
    },
];

export type Indent = 'off' | Indent0;
