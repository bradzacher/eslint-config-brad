declare module 'eslint/use-at-your-own-risk' {
  import type { TSESLint } from '@typescript-eslint/utils';

  type Rule = TSESLint.RuleModule<string, Array<unknown>>;

  class LazyLoadingRuleMap extends Map<string, Rule> {
    public constructor(loaders: Array<[string, () => Rule]>);
  }
  export const builtinRules: LazyLoadingRuleMap;
}
