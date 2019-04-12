// this file is auto-generated. Run `regenerate-types` to regenerate it.

declare namespace Rules {
    type RuleString = 'off' | 'warn' | 'error'
    interface RuleArray extends Array<unknown> {
        0 : RuleString
    }
    export type RuleType = RuleString | RuleArray
    export interface Eslint {
        'accessor-pairs' : RuleType
        'array-bracket-newline' : RuleType
        'array-bracket-spacing' : RuleType
        'array-callback-return' : RuleType
        'array-element-newline' : RuleType
        'arrow-body-style' : RuleType
        'arrow-parens' : RuleType
        'arrow-spacing' : RuleType
        'block-scoped-var' : RuleType
        'block-spacing' : RuleType
        'brace-style' : RuleType
        'callback-return' : RuleType
        camelcase : RuleType
        'capitalized-comments' : RuleType
        'class-methods-use-this' : RuleType
        'comma-dangle' : RuleType
        'comma-spacing' : RuleType
        'comma-style' : RuleType
        complexity : RuleType
        'computed-property-spacing' : RuleType
        'consistent-return' : RuleType
        'consistent-this' : RuleType
        'constructor-super' : RuleType
        curly : RuleType
        'default-case' : RuleType
        'dot-location' : RuleType
        'dot-notation' : RuleType
        'eol-last' : RuleType
        eqeqeq : RuleType
        'for-direction' : RuleType
        'func-call-spacing' : RuleType
        'func-name-matching' : RuleType
        'func-names' : RuleType
        'func-style' : RuleType
        'function-paren-newline' : RuleType
        'generator-star-spacing' : RuleType
        'getter-return' : RuleType
        'global-require' : RuleType
        'guard-for-in' : RuleType
        'handle-callback-err' : RuleType
        'id-blacklist' : RuleType
        'id-length' : RuleType
        'id-match' : RuleType
        'implicit-arrow-linebreak' : RuleType
        indent : RuleType
        'init-declarations' : RuleType
        'jsx-quotes' : RuleType
        'key-spacing' : RuleType
        'keyword-spacing' : RuleType
        'line-comment-position' : RuleType
        'linebreak-style' : RuleType
        'lines-around-comment' : RuleType
        'lines-between-class-members' : RuleType
        'max-classes-per-file' : RuleType
        'max-depth' : RuleType
        'max-len' : RuleType
        'max-lines' : RuleType
        'max-lines-per-function' : RuleType
        'max-nested-callbacks' : RuleType
        'max-params' : RuleType
        'max-statements' : RuleType
        'max-statements-per-line' : RuleType
        'multiline-comment-style' : RuleType
        'multiline-ternary' : RuleType
        'new-cap' : RuleType
        'new-parens' : RuleType
        'newline-per-chained-call' : RuleType
        'no-alert' : RuleType
        'no-array-constructor' : RuleType
        'no-async-promise-executor' : RuleType
        'no-await-in-loop' : RuleType
        'no-bitwise' : RuleType
        'no-buffer-constructor' : RuleType
        'no-caller' : RuleType
        'no-case-declarations' : RuleType
        'no-class-assign' : RuleType
        'no-compare-neg-zero' : RuleType
        'no-cond-assign' : RuleType
        'no-confusing-arrow' : RuleType
        'no-console' : RuleType
        'no-const-assign' : RuleType
        'no-constant-condition' : RuleType
        'no-continue' : RuleType
        'no-control-regex' : RuleType
        'no-debugger' : RuleType
        'no-delete-var' : RuleType
        'no-div-regex' : RuleType
        'no-dupe-args' : RuleType
        'no-dupe-class-members' : RuleType
        'no-dupe-keys' : RuleType
        'no-duplicate-case' : RuleType
        'no-duplicate-imports' : RuleType
        'no-else-return' : RuleType
        'no-empty' : RuleType
        'no-empty-character-class' : RuleType
        'no-empty-function' : RuleType
        'no-empty-pattern' : RuleType
        'no-eq-null' : RuleType
        'no-eval' : RuleType
        'no-ex-assign' : RuleType
        'no-extend-native' : RuleType
        'no-extra-bind' : RuleType
        'no-extra-boolean-cast' : RuleType
        'no-extra-label' : RuleType
        'no-extra-parens' : RuleType
        'no-extra-semi' : RuleType
        'no-fallthrough' : RuleType
        'no-floating-decimal' : RuleType
        'no-func-assign' : RuleType
        'no-global-assign' : RuleType
        'no-implicit-coercion' : RuleType
        'no-implicit-globals' : RuleType
        'no-implied-eval' : RuleType
        'no-inline-comments' : RuleType
        'no-inner-declarations' : RuleType
        'no-invalid-regexp' : RuleType
        'no-invalid-this' : RuleType
        'no-irregular-whitespace' : RuleType
        'no-iterator' : RuleType
        'no-label-var' : RuleType
        'no-labels' : RuleType
        'no-lone-blocks' : RuleType
        'no-lonely-if' : RuleType
        'no-loop-func' : RuleType
        'no-magic-numbers' : RuleType
        'no-misleading-character-class' : RuleType
        'no-mixed-operators' : RuleType
        'no-mixed-requires' : RuleType
        'no-mixed-spaces-and-tabs' : RuleType
        'no-multi-assign' : RuleType
        'no-multi-spaces' : RuleType
        'no-multi-str' : RuleType
        'no-multiple-empty-lines' : RuleType
        'no-negated-condition' : RuleType
        'no-nested-ternary' : RuleType
        'no-new' : RuleType
        'no-new-func' : RuleType
        'no-new-object' : RuleType
        'no-new-require' : RuleType
        'no-new-symbol' : RuleType
        'no-new-wrappers' : RuleType
        'no-obj-calls' : RuleType
        'no-octal' : RuleType
        'no-octal-escape' : RuleType
        'no-param-reassign' : RuleType
        'no-path-concat' : RuleType
        'no-plusplus' : RuleType
        'no-process-env' : RuleType
        'no-process-exit' : RuleType
        'no-proto' : RuleType
        'no-prototype-builtins' : RuleType
        'no-redeclare' : RuleType
        'no-regex-spaces' : RuleType
        'no-restricted-globals' : RuleType
        'no-restricted-imports' : RuleType
        'no-restricted-modules' : RuleType
        'no-restricted-properties' : RuleType
        'no-restricted-syntax' : RuleType
        'no-return-assign' : RuleType
        'no-return-await' : RuleType
        'no-script-url' : RuleType
        'no-self-assign' : RuleType
        'no-self-compare' : RuleType
        'no-sequences' : RuleType
        'no-shadow' : RuleType
        'no-shadow-restricted-names' : RuleType
        'no-sparse-arrays' : RuleType
        'no-sync' : RuleType
        'no-tabs' : RuleType
        'no-template-curly-in-string' : RuleType
        'no-ternary' : RuleType
        'no-this-before-super' : RuleType
        'no-throw-literal' : RuleType
        'no-trailing-spaces' : RuleType
        'no-undef' : RuleType
        'no-undef-init' : RuleType
        'no-undefined' : RuleType
        'no-underscore-dangle' : RuleType
        'no-unexpected-multiline' : RuleType
        'no-unmodified-loop-condition' : RuleType
        'no-unneeded-ternary' : RuleType
        'no-unreachable' : RuleType
        'no-unsafe-finally' : RuleType
        'no-unsafe-negation' : RuleType
        'no-unused-expressions' : RuleType
        'no-unused-labels' : RuleType
        'no-unused-vars' : RuleType
        'no-use-before-define' : RuleType
        'no-useless-call' : RuleType
        'no-useless-catch' : RuleType
        'no-useless-computed-key' : RuleType
        'no-useless-concat' : RuleType
        'no-useless-constructor' : RuleType
        'no-useless-escape' : RuleType
        'no-useless-rename' : RuleType
        'no-useless-return' : RuleType
        'no-var' : RuleType
        'no-void' : RuleType
        'no-warning-comments' : RuleType
        'no-whitespace-before-property' : RuleType
        'no-with' : RuleType
        'nonblock-statement-body-position' : RuleType
        'object-curly-newline' : RuleType
        'object-curly-spacing' : RuleType
        'object-property-newline' : RuleType
        'object-shorthand' : RuleType
        'one-var' : RuleType
        'one-var-declaration-per-line' : RuleType
        'operator-assignment' : RuleType
        'operator-linebreak' : RuleType
        'padded-blocks' : RuleType
        'padding-line-between-statements' : RuleType
        'prefer-arrow-callback' : RuleType
        'prefer-const' : RuleType
        'prefer-destructuring' : RuleType
        'prefer-named-capture-group' : RuleType
        'prefer-numeric-literals' : RuleType
        'prefer-object-spread' : RuleType
        'prefer-promise-reject-errors' : RuleType
        'prefer-rest-params' : RuleType
        'prefer-spread' : RuleType
        'prefer-template' : RuleType
        'quote-props' : RuleType
        quotes : RuleType
        radix : RuleType
        'require-atomic-updates' : RuleType
        'require-await' : RuleType
        'require-unicode-regexp' : RuleType
        'require-yield' : RuleType
        'rest-spread-spacing' : RuleType
        semi : RuleType
        'semi-spacing' : RuleType
        'semi-style' : RuleType
        'sort-imports' : RuleType
        'sort-keys' : RuleType
        'sort-vars' : RuleType
        'space-before-blocks' : RuleType
        'space-before-function-paren' : RuleType
        'space-in-parens' : RuleType
        'space-infix-ops' : RuleType
        'space-unary-ops' : RuleType
        'spaced-comment' : RuleType
        strict : RuleType
        'switch-colon-spacing' : RuleType
        'symbol-description' : RuleType
        'template-curly-spacing' : RuleType
        'template-tag-spacing' : RuleType
        'unicode-bom' : RuleType
        'use-isnan' : RuleType
        'valid-typeof' : RuleType
        'vars-on-top' : RuleType
        'wrap-iife' : RuleType
        'wrap-regex' : RuleType
        'yield-star-spacing' : RuleType
        yoda : RuleType
    }
    export interface TypescriptEslint {
        '@typescript-eslint/adjacent-overload-signatures' : RuleType
        '@typescript-eslint/array-type' : RuleType
        '@typescript-eslint/ban-ts-ignore' : RuleType
        '@typescript-eslint/ban-types' : RuleType
        '@typescript-eslint/camelcase' : RuleType
        '@typescript-eslint/class-name-casing' : RuleType
        '@typescript-eslint/explicit-function-return-type' : RuleType
        '@typescript-eslint/explicit-member-accessibility' : RuleType
        '@typescript-eslint/generic-type-naming' : RuleType
        '@typescript-eslint/indent' : RuleType
        '@typescript-eslint/interface-name-prefix' : RuleType
        '@typescript-eslint/member-delimiter-style' : RuleType
        '@typescript-eslint/member-naming' : RuleType
        '@typescript-eslint/member-ordering' : RuleType
        '@typescript-eslint/no-angle-bracket-type-assertion' : RuleType
        '@typescript-eslint/no-array-constructor' : RuleType
        '@typescript-eslint/no-empty-interface' : RuleType
        '@typescript-eslint/no-explicit-any' : RuleType
        '@typescript-eslint/no-extraneous-class' : RuleType
        '@typescript-eslint/no-for-in-array' : RuleType
        '@typescript-eslint/no-inferrable-types' : RuleType
        '@typescript-eslint/no-misused-new' : RuleType
        '@typescript-eslint/no-namespace' : RuleType
        '@typescript-eslint/no-non-null-assertion' : RuleType
        '@typescript-eslint/no-object-literal-type-assertion' : RuleType
        '@typescript-eslint/no-parameter-properties' : RuleType
        '@typescript-eslint/no-require-imports' : RuleType
        '@typescript-eslint/no-this-alias' : RuleType
        '@typescript-eslint/no-triple-slash-reference' : RuleType
        '@typescript-eslint/no-type-alias' : RuleType
        '@typescript-eslint/no-unnecessary-qualifier' : RuleType
        '@typescript-eslint/no-unnecessary-type-assertion' : RuleType
        '@typescript-eslint/no-unused-vars' : RuleType
        '@typescript-eslint/no-use-before-define' : RuleType
        '@typescript-eslint/no-useless-constructor' : RuleType
        '@typescript-eslint/no-var-requires' : RuleType
        '@typescript-eslint/prefer-function-type' : RuleType
        '@typescript-eslint/prefer-interface' : RuleType
        '@typescript-eslint/prefer-namespace-keyword' : RuleType
        '@typescript-eslint/promise-function-async' : RuleType
        '@typescript-eslint/require-array-sort-compare' : RuleType
        '@typescript-eslint/restrict-plus-operands' : RuleType
        '@typescript-eslint/type-annotation-spacing' : RuleType
        '@typescript-eslint/unified-signatures' : RuleType
    }
    export interface Dependencies {
        'dependencies/case-sensitive' : RuleType
        'dependencies/no-cycles' : RuleType
        'dependencies/no-unresolved' : RuleType
        'dependencies/require-json-ext' : RuleType
    }
    export interface EslintComments {
        'eslint-comments/disable-enable-pair' : RuleType
        'eslint-comments/no-aggregating-enable' : RuleType
        'eslint-comments/no-duplicate-disable' : RuleType
        'eslint-comments/no-restricted-disable' : RuleType
        'eslint-comments/no-unlimited-disable' : RuleType
        'eslint-comments/no-unused-disable' : RuleType
        'eslint-comments/no-unused-enable' : RuleType
        'eslint-comments/no-use' : RuleType
    }
    export interface Import {
        'import/default' : RuleType
        'import/dynamic-import-chunkname' : RuleType
        'import/export' : RuleType
        'import/exports-last' : RuleType
        'import/extensions' : RuleType
        'import/first' : RuleType
        'import/group-exports' : RuleType
        'import/max-dependencies' : RuleType
        'import/named' : RuleType
        'import/namespace' : RuleType
        'import/newline-after-import' : RuleType
        'import/no-absolute-path' : RuleType
        'import/no-amd' : RuleType
        'import/no-anonymous-default-export' : RuleType
        'import/no-commonjs' : RuleType
        'import/no-cycle' : RuleType
        'import/no-default-export' : RuleType
        'import/no-deprecated' : RuleType
        'import/no-duplicates' : RuleType
        'import/no-dynamic-require' : RuleType
        'import/no-extraneous-dependencies' : RuleType
        'import/no-internal-modules' : RuleType
        'import/no-mutable-exports' : RuleType
        'import/no-named-as-default' : RuleType
        'import/no-named-as-default-member' : RuleType
        'import/no-named-default' : RuleType
        'import/no-named-export' : RuleType
        'import/no-namespace' : RuleType
        'import/no-nodejs-modules' : RuleType
        'import/no-relative-parent-imports' : RuleType
        'import/no-restricted-paths' : RuleType
        'import/no-self-import' : RuleType
        'import/no-unassigned-import' : RuleType
        'import/no-unresolved' : RuleType
        'import/no-useless-path-segments' : RuleType
        'import/no-webpack-loader-syntax' : RuleType
        'import/order' : RuleType
        'import/prefer-default-export' : RuleType
        'import/unambiguous' : RuleType
    }
    export interface Jest {
        'jest/consistent-test-it' : RuleType
        'jest/expect-expect' : RuleType
        'jest/lowercase-name' : RuleType
        'jest/no-alias-methods' : RuleType
        'jest/no-disabled-tests' : RuleType
        'jest/no-empty-title' : RuleType
        'jest/no-focused-tests' : RuleType
        'jest/no-hooks' : RuleType
        'jest/no-identical-title' : RuleType
        'jest/no-jasmine-globals' : RuleType
        'jest/no-jest-import' : RuleType
        'jest/no-large-snapshots' : RuleType
        'jest/no-test-callback' : RuleType
        'jest/no-test-prefixes' : RuleType
        'jest/no-test-return-statement' : RuleType
        'jest/no-truthy-falsy' : RuleType
        'jest/prefer-called-with' : RuleType
        'jest/prefer-expect-assertions' : RuleType
        'jest/prefer-inline-snapshots' : RuleType
        'jest/prefer-spy-on' : RuleType
        'jest/prefer-strict-equal' : RuleType
        'jest/prefer-to-be-null' : RuleType
        'jest/prefer-to-be-undefined' : RuleType
        'jest/prefer-to-contain' : RuleType
        'jest/prefer-to-have-length' : RuleType
        'jest/prefer-todo' : RuleType
        'jest/require-tothrow-message' : RuleType
        'jest/valid-describe' : RuleType
        'jest/valid-expect' : RuleType
        'jest/valid-expect-in-promise' : RuleType
    }
    export interface React {
        'react/boolean-prop-naming' : RuleType
        'react/button-has-type' : RuleType
        'react/default-props-match-prop-types' : RuleType
        'react/destructuring-assignment' : RuleType
        'react/display-name' : RuleType
        'react/forbid-component-props' : RuleType
        'react/forbid-dom-props' : RuleType
        'react/forbid-elements' : RuleType
        'react/forbid-foreign-prop-types' : RuleType
        'react/forbid-prop-types' : RuleType
        'react/jsx-boolean-value' : RuleType
        'react/jsx-child-element-spacing' : RuleType
        'react/jsx-closing-bracket-location' : RuleType
        'react/jsx-closing-tag-location' : RuleType
        'react/jsx-curly-brace-presence' : RuleType
        'react/jsx-curly-spacing' : RuleType
        'react/jsx-equals-spacing' : RuleType
        'react/jsx-filename-extension' : RuleType
        'react/jsx-first-prop-new-line' : RuleType
        'react/jsx-fragments' : RuleType
        'react/jsx-handler-names' : RuleType
        'react/jsx-indent' : RuleType
        'react/jsx-indent-props' : RuleType
        'react/jsx-key' : RuleType
        'react/jsx-max-depth' : RuleType
        'react/jsx-max-props-per-line' : RuleType
        'react/jsx-no-bind' : RuleType
        'react/jsx-no-comment-textnodes' : RuleType
        'react/jsx-no-duplicate-props' : RuleType
        'react/jsx-no-literals' : RuleType
        'react/jsx-no-target-blank' : RuleType
        'react/jsx-no-undef' : RuleType
        'react/jsx-one-expression-per-line' : RuleType
        'react/jsx-pascal-case' : RuleType
        'react/jsx-props-no-multi-spaces' : RuleType
        'react/jsx-sort-default-props' : RuleType
        'react/jsx-sort-props' : RuleType
        'react/jsx-tag-spacing' : RuleType
        'react/jsx-uses-react' : RuleType
        'react/jsx-uses-vars' : RuleType
        'react/jsx-wrap-multilines' : RuleType
        'react/no-access-state-in-setstate' : RuleType
        'react/no-array-index-key' : RuleType
        'react/no-children-prop' : RuleType
        'react/no-danger' : RuleType
        'react/no-danger-with-children' : RuleType
        'react/no-deprecated' : RuleType
        'react/no-did-mount-set-state' : RuleType
        'react/no-did-update-set-state' : RuleType
        'react/no-direct-mutation-state' : RuleType
        'react/no-find-dom-node' : RuleType
        'react/no-is-mounted' : RuleType
        'react/no-multi-comp' : RuleType
        'react/no-redundant-should-component-update' : RuleType
        'react/no-render-return-value' : RuleType
        'react/no-set-state' : RuleType
        'react/no-string-refs' : RuleType
        'react/no-this-in-sfc' : RuleType
        'react/no-typos' : RuleType
        'react/no-unescaped-entities' : RuleType
        'react/no-unknown-property' : RuleType
        'react/no-unsafe' : RuleType
        'react/no-unused-prop-types' : RuleType
        'react/no-unused-state' : RuleType
        'react/no-will-update-set-state' : RuleType
        'react/prefer-es6-class' : RuleType
        'react/prefer-stateless-function' : RuleType
        'react/prop-types' : RuleType
        'react/react-in-jsx-scope' : RuleType
        'react/require-default-props' : RuleType
        'react/require-optimization' : RuleType
        'react/require-render-return' : RuleType
        'react/self-closing-comp' : RuleType
        'react/sort-comp' : RuleType
        'react/sort-prop-types' : RuleType
        'react/style-prop-object' : RuleType
        'react/void-dom-elements-no-children' : RuleType
    }
}
