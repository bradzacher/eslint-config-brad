// this file is auto-generated. Run `make regenerate-types` to regenerate it.

type NamingConvention0 = [
  'off' | 'error' | 'warn',
  ...(
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: (
          | 'default'
          | 'variableLike'
          | 'memberLike'
          | 'typeLike'
          | 'variable'
          | 'function'
          | 'parameter'
          | 'property'
          | 'parameterProperty'
          | 'method'
          | 'accessor'
          | 'enumMember'
          | 'class'
          | 'interface'
          | 'typeAlias'
          | 'enum'
          | 'typeParameter'
        )[];
        modifiers?: (
          | 'const'
          | 'readonly'
          | 'static'
          | 'public'
          | 'protected'
          | 'private'
          | 'abstract'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'default';
        modifiers?: (
          | 'const'
          | 'readonly'
          | 'static'
          | 'public'
          | 'protected'
          | 'private'
          | 'abstract'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'variableLike';
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'variable';
        modifiers?: 'const'[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'function';
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'parameter';
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'memberLike';
        modifiers?: (
          | 'private'
          | 'protected'
          | 'public'
          | 'static'
          | 'readonly'
          | 'abstract'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'property';
        modifiers?: (
          | 'private'
          | 'protected'
          | 'public'
          | 'static'
          | 'readonly'
          | 'abstract'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'parameterProperty';
        modifiers?: ('private' | 'protected' | 'public' | 'readonly')[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'method';
        modifiers?: (
          | 'private'
          | 'protected'
          | 'public'
          | 'static'
          | 'abstract'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'accessor';
        modifiers?: (
          | 'private'
          | 'protected'
          | 'public'
          | 'static'
          | 'abstract'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'enumMember';
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeLike';
        modifiers?: 'abstract'[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'class';
        modifiers?: 'abstract'[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'interface';
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeAlias';
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'enum';
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?: 'forbid' | 'allow' | 'require';
        trailingUnderscore?: 'forbid' | 'allow' | 'require';
        prefix?: string[];
        suffix?: string[];
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeParameter';
      }
  )[]
];

export type NamingConvention = 'off' | NamingConvention0;
