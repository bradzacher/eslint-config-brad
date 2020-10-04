declare module 'eslint/lib/rules' {
  import type { TSESLint } from '@typescript-eslint/experimental-utils';

  type Rule = TSESLint.RuleModule<string, Array<unknown>>;

  class LazyLoadingRuleMap extends Map<string, Rule> {
    public constructor(loaders: Array<[string, () => Rule]>);
  }
  const rules: LazyLoadingRuleMap;
  export = rules;
}
