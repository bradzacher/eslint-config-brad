// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type MemberOrdering0 = [
    ('off' | 'error' | 'warn'),
    {
        default?:
            | 'never'
            | (
                  | 'field'
                  | 'public-field'
                  | 'static-field'
                  | 'public-static-field'
                  | 'instance-field'
                  | 'public-instance-field'
                  | 'protected-field'
                  | 'protected-static-field'
                  | 'protected-instance-field'
                  | 'private-field'
                  | 'private-static-field'
                  | 'private-instance-field'
                  | 'method'
                  | 'public-method'
                  | 'static-method'
                  | 'public-static-method'
                  | 'instance-method'
                  | 'public-instance-method'
                  | 'protected-method'
                  | 'protected-static-method'
                  | 'protected-instance-method'
                  | 'private-method'
                  | 'private-static-method'
                  | 'private-instance-method'
                  | 'constructor'
                  | 'public-constructor'
                  | 'protected-constructor'
                  | 'private-constructor')[];
        classes?:
            | 'never'
            | (
                  | 'field'
                  | 'public-field'
                  | 'static-field'
                  | 'public-static-field'
                  | 'instance-field'
                  | 'public-instance-field'
                  | 'protected-field'
                  | 'protected-static-field'
                  | 'protected-instance-field'
                  | 'private-field'
                  | 'private-static-field'
                  | 'private-instance-field'
                  | 'method'
                  | 'public-method'
                  | 'static-method'
                  | 'public-static-method'
                  | 'instance-method'
                  | 'public-instance-method'
                  | 'protected-method'
                  | 'protected-static-method'
                  | 'protected-instance-method'
                  | 'private-method'
                  | 'private-static-method'
                  | 'private-instance-method'
                  | 'constructor'
                  | 'public-constructor'
                  | 'protected-constructor'
                  | 'private-constructor')[];
        classExpressions?:
            | 'never'
            | (
                  | 'field'
                  | 'public-field'
                  | 'static-field'
                  | 'public-static-field'
                  | 'instance-field'
                  | 'public-instance-field'
                  | 'protected-field'
                  | 'protected-static-field'
                  | 'protected-instance-field'
                  | 'private-field'
                  | 'private-static-field'
                  | 'private-instance-field'
                  | 'method'
                  | 'public-method'
                  | 'static-method'
                  | 'public-static-method'
                  | 'instance-method'
                  | 'public-instance-method'
                  | 'protected-method'
                  | 'protected-static-method'
                  | 'protected-instance-method'
                  | 'private-method'
                  | 'private-static-method'
                  | 'private-instance-method'
                  | 'constructor'
                  | 'public-constructor'
                  | 'protected-constructor'
                  | 'private-constructor')[];
        interfaces?: 'never' | ('field' | 'method' | 'constructor')[];
        typeLiterals?: 'never' | ('field' | 'method' | 'constructor')[];
    },
];

export type MemberOrdering = 'off' | MemberOrdering0;
