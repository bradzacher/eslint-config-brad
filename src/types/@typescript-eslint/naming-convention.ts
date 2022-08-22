// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
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
          | 'method'
          | 'property'
          | 'variable'
          | 'function'
          | 'parameter'
          | 'parameterProperty'
          | 'accessor'
          | 'enumMember'
          | 'classMethod'
          | 'objectLiteralMethod'
          | 'typeMethod'
          | 'classProperty'
          | 'objectLiteralProperty'
          | 'typeProperty'
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
          | 'destructured'
          | 'global'
          | 'exported'
          | 'unused'
          | 'requiresQuotes'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
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
          | 'destructured'
          | 'global'
          | 'exported'
          | 'unused'
          | 'requiresQuotes'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'variableLike';
        modifiers?: 'unused'[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'variable';
        modifiers?: (
          | 'const'
          | 'destructured'
          | 'exported'
          | 'global'
          | 'unused'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'function';
        modifiers?: ('exported' | 'global' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'parameter';
        modifiers?: ('destructured' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'memberLike';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'classProperty';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'objectLiteralProperty';
        modifiers?: ('public' | 'requiresQuotes')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeProperty';
        modifiers?: ('public' | 'readonly' | 'requiresQuotes')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'property';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'classMethod';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'objectLiteralMethod';
        modifiers?: ('public' | 'requiresQuotes')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeMethod';
        modifiers?: ('public' | 'requiresQuotes')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'method';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'accessor';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'enumMember';
        modifiers?: 'requiresQuotes'[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeLike';
        modifiers?: ('abstract' | 'exported' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'class';
        modifiers?: ('abstract' | 'exported' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'interface';
        modifiers?: ('exported' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeAlias';
        modifiers?: ('exported' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'enum';
        modifiers?: ('exported' | 'unused')[];
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
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeParameter';
        modifiers?: 'unused'[];
      }
  )[],
];

export type NamingConvention = 'off' | NamingConvention0;
