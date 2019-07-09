declare module 'eslint/lib/rules' {
    // eslint-disable-next-line import/no-extraneous-dependencies
    import { TSESLint } from '@typescript-eslint/experimental-utils';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Rule = TSESLint.RuleModule<any, any>;

    class LazyLoadingRuleMap extends Map<string, Rule> {
        public constructor(loaders: Array<[string, () => Rule]>);
    }
    const rules: LazyLoadingRuleMap;
    export = rules;
}
