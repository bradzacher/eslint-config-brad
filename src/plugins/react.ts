import { React } from '../types/react';

const rules: React = {
  // Enforces consistent naming for boolean props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming
  'react/boolean-prop-naming': 'off',

  // Prevent usage of button elements without an explicit type attribute
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],

  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  'react/default-props-match-prop-types': [
    'error',
    {
      allowRequiredDefaults: false,
    },
  ],

  // Enforce consistent usage of destructuring assignment of props, state, and context
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': 'off',

  // Prevent missing displayName in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': [
    'off',
    {
      ignoreTranspilerName: false,
    },
  ],

  // Forbid certain props on Components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  'react/forbid-component-props': [
    'off',
    {
      forbid: [],
    },
  ],

  // Forbid certain props on DOM Nodes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  'react/forbid-dom-props': [
    'off',
    {
      forbid: [],
    },
  ],

  // Forbid certain elements
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  'react/forbid-elements': [
    'off',
    {
      forbid: [],
    },
  ],

  // Forbids using non-exported propTypes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  'react/forbid-foreign-prop-types': ['error'],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  // Enforce boolean attributes notation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': [
    'error',
    'never',
    {
      always: [],
    },
  ],

  // Ensures inline tags are not rendered without spaces between them
  'react/jsx-child-element-spacing': 'off',

  // Validate closing bracket location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

  // Validate closing tag location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  'react/jsx-closing-tag-location': ['error'],

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
    },
  ],

  // Enforce linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  'react/jsx-curly-newline': [
    'error',
    {
      multiline: 'require',
      singleline: 'consistent',
    },
  ],

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  'react/jsx-curly-spacing': [
    'error',
    'never',
    {
      allowMultiline: true,
    },
  ],

  // Enforce spacing around jsx equals signs
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  'react/jsx-equals-spacing': ['error', 'never'],

  // only .jsx files may have JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.jsx', '.tsx'],
    },
  ],

  // Require that the first prop in a JSX element be on a new line when the element is multiline
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // Enforce shorthand or standard form for React fragments
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],

  // Enforce event handler naming conventions in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': [
    'off',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    },
  ],

  // Enforce JSX indentation
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  'react/jsx-indent': ['error', 4],

  // Validate props indentation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  'react/jsx-indent-props': ['error', 4],

  // Validate JSX has key prop when in array or iterator
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': 'off', // TODO ???

  // Validate JSX maximum depth
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  'react/jsx-max-depth': 'off',

  // Limit maximum of props on a single line in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  'react/jsx-max-props-per-line': [
    'error',
    {
      maximum: 1,
      when: 'multiline',
    },
  ],

  // Prevent usage of .bind() in JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false,
    },
  ],

  // prevent accidental JS comments from being injected into JSX as text
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': ['error'],

  // Prevent duplicate props in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],

  // Prevent usage of unwrapped JSX strings
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  'react/jsx-no-literals': [
    'off',
    {
      noStrings: true,
    },
  ],

  // Disallow target="_blank" on links
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': ['error'],

  // Disallow undeclared variables in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': ['error'],

  // Disallow unnecessary fragments
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': ['error'],

  // One JSX Element Per Line
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  'react/jsx-one-expression-per-line': 'off',

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],

  // Disallow multiple spaces between inline JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  'react/jsx-props-no-multi-spaces': ['error'],

  // Disallow JSX props spreading
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  // errors are well handled by typescript
  'react/jsx-props-no-spreading': 'off',

  // Enforce defaultProps declarations alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
  'react/jsx-sort-default-props': [
    'off',
    {
      ignoreCase: true,
    },
  ],

  // Enforce props alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  'react/jsx-sort-props': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    },
  ],

  // Prevent React to be incorrectly marked as unused
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': ['error'],

  // Prevent variables used in JSX to be incorrectly marked as unused
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': ['error'],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  // taken care of by prettier
  'react/jsx-wrap-multilines': 'off',

  // Prevent using this.state within a this.setState
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': ['error'],

  // Prevent usage of Array index in keys
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': ['warn'],

  // Prevent passing of children as props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': ['error'],

  // Prevent usage of dangerous JSX properties
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': ['warn'],

  // Prevent problem with children and props.dangerouslySetInnerHTML
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': ['error'],

  // Prevent usage of deprecated methods
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': ['error'],

  // Prevent usage of setState in componentDidMount
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  // this is necessary for server-rendering
  'react/no-did-mount-set-state': 'off',

  // Prevent usage of setState in componentDidUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': ['error'],

  // Prevent direct mutation of this.state
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'off',

  // warn against using findDOMNode()
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': ['error'],

  // Prevent usage of isMounted
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': ['error'],

  // Prevent multiple component definition per file
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  'react/no-multi-comp': [
    'error',
    {
      ignoreStateless: true,
    },
  ],

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': ['error'],

  // Prevent usage of the return value of React.render
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': ['error'],

  // Prevent usage of setState
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  'react/no-set-state': 'off',

  // Prevent using string references
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': ['error'],

  // Prevent this from being used in stateless functional components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
  'react/no-this-in-sfc': ['error'],

  // Prevents common casing typos
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  'react/no-typos': ['error'],

  // Prevent invalid characters from appearing in markup
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  'react/no-unescaped-entities': ['error'],

  // Prevent usage of unknown DOM property
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': ['error'],

  // Prevent usage of UNSAFE_ methods
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  'react/no-unsafe': ['error'],

  // Prevent unused propType definitions
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  'react/no-unused-prop-types': [
    'error',
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],

  // Prevent unused state values
  // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
  'react/no-unused-state': ['error'],

  // Prevent usage of setState in componentWillUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': ['error'],

  // Require ES6 class declarations over React.createClass
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['error', 'always'],

  // Enforce that props are read-only
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  // as at 7.13.0 - only supports flow types
  'react/prefer-read-only-props': 'off',

  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': [
    'error',
    {
      // Can switch to React.memo
      ignorePureComponents: false,
    },
  ],

  // Prevent missing props validation in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': 'off',

  // Prevent missing React when using JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': ['error'],

  // Enforce a defaultProps definition for every prop that is not a required prop
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  // typescript handles this
  'react/require-default-props': 'off',

  // require a shouldComponentUpdate method, or PureRenderMixin
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  // functional components with hooks!
  'react/require-optimization': 'off',

  // Require render() methods to return something
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': ['error'],

  // Prevent extra closing tags for components without children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': ['error'],

  // Enforce component methods order
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  // functional components with hooks!
  'react/sort-comp': 'off',

  // Enforce propTypes declarations alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  // functional components with hooks!
  'react/sort-prop-types': 'off',

  // Enforce state initialization style
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  // functional components with hooks!
  'react/state-in-constructor': 'off',

  // Enforces where React component static properties should be positioned.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  // functional components with hooks!
  'react/static-property-placement': 'off',

  // Require style prop value be an object or var
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': ['error'],

  // Prevent void DOM elements from receiving children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': ['error'],
};
export default {
  name: 'react',
  rules,
};
