// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type PromiseFunctionAsync0 = [
    ('off' | 'error' | 'warn'),
    {
        allowAny?: boolean;
        allowedPromiseNames?: string[];
        checkArrowFunctions?: boolean;
        checkFunctionDeclarations?: boolean;
        checkFunctionExpressions?: boolean;
        checkMethodDeclarations?: boolean;
    },
];

export type PromiseFunctionAsync = 'off' | PromiseFunctionAsync0;