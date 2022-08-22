// this file is auto-generated. Run `make regenerate-types` to regenerate it.

/**
 * @minItems 1
 */
type NoUnsupportedFeaturesEsSyntax0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        version?: string;
        ignores?: (
          | 'arrowFunctions'
          | 'binaryNumericLiterals'
          | 'blockScopedFunctions'
          | 'blockScopedVariables'
          | 'classes'
          | 'computedProperties'
          | 'defaultParameters'
          | 'destructuring'
          | 'forOfLoops'
          | 'generators'
          | 'modules'
          | 'new.target'
          | 'objectSuperProperties'
          | 'octalNumericLiterals'
          | 'propertyShorthands'
          | 'regexpU'
          | 'regexpY'
          | 'restParameters'
          | 'spreadElements'
          | 'templateLiterals'
          | 'unicodeCodePointEscapes'
          | 'exponentialOperators'
          | 'asyncFunctions'
          | 'trailingCommasInFunctions'
          | 'asyncIteration'
          | 'malformedTemplateLiterals'
          | 'regexpLookbehind'
          | 'regexpNamedCaptureGroups'
          | 'regexpS'
          | 'regexpUnicodeProperties'
          | 'restSpreadProperties'
          | 'jsonSuperset'
          | 'optionalCatchBinding'
          | 'bigint'
          | 'dynamicImport'
        )[];
      },
    ];

export type NoUnsupportedFeaturesEsSyntax =
  | 'off'
  | NoUnsupportedFeaturesEsSyntax0;
