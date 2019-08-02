// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type Typedef0 =
  | []
  | [('off' | 'error' | 'warn')]
  | [
      ('off' | 'error' | 'warn'),
      {
        arrayDestructuring?: boolean;
        arrowParameter?: boolean;
        memberVariableDeclaration?: boolean;
        objectDestructuring?: boolean;
        parameter?: boolean;
        propertyDeclaration?: boolean;
        variableDeclaration?: boolean;
        [k: string]: any;
      },
    ];

export type Typedef = 'off' | Typedef0;
