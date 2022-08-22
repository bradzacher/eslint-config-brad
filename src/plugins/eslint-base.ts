// the global list of restricted terms that airbnb uses
import globals from 'eslint-restricted-globals';

import type { Eslint } from '../types/eslint/index';

// we remove some because of how the eslint TS parser interacts with eslint when using interfaces
const pseudoAllowedGlobals = new Set([
  'name',
  'status',
  'location',
  'open',
  'close',
  'event',
]);
const restrictedGlobals = globals.filter(g => !pseudoAllowedGlobals.has(g));
const rules: Eslint = {
  // This rule warns if setters are defined without getters
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': [
    'error',
    {
      setWithoutGet: true,
      getWithoutSet: false,
    },
  ],

  // This rule enforces line breaks after opening and before closing array brackets.
  // https://eslint.org/docs/rules/array-bracket-newline
  // covered by prettier
  'array-bracket-newline': 'off',

  // This rule enforces consistent spacing inside array brackets.
  // https://eslint.org/docs/rules/array-bracket-spacing
  // covered by prettier
  'array-bracket-spacing': 'off',

  // This rule finds callback functions of the following methods, then checks usage of return statement
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': ['error'],

  // This rule enforces line breaks between array elements.
  // https://eslint.org/docs/rules/array-element-newline
  // covered by prettier
  'array-element-newline': 'off',

  // This rule can enforce or disallow the use of braces around arrow function body.
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],

  // This rule enforces parentheses around arrow function parameters regardless of arity.
  // https://eslint.org/docs/rules/arrow-parens
  // covered by prettier
  'arrow-parens': 'off',

  // Require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  // covered by prettier
  'arrow-spacing': 'off',

  // This rule aims to reduce the usage of variables outside of their binding context and emulate
  // traditional block scope from other languages.
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': ['error'],

  // This rule enforces consistent spacing inside an open block token and the next token on the same line.
  // This rule also enforces consistent spacing inside a close block token and previous token on the same line.
  // https://eslint.org/docs/rules/block-spacing
  // covered by prettier
  'block-spacing': 'off',

  // This rule enforces consistent brace style for blocks.
  // https://eslint.org/docs/rules/brace-style
  // extended in @typescript-eslint
  'brace-style': 'off',

  // This rule looks for any underscores (_) located within the source code.
  // It ignores leading and trailing underscores and only checks those in the middle of a variable name.
  // If ESLint decides that the variable is a constant (all upper case), then no warning will be thrown.
  // Otherwise, a warning will be thrown. This rule only flags definitions and assignments but not function calls.
  // In case of ES6 import statements, this rule only targets the name of the variable that will be imported into the local module scope.
  // https://eslint.org/docs/rules/camelcase
  // extended in @typescript-eslint
  camelcase: 'off',

  // This rule aims to enforce a consistent style of comments across your codebase.
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': 'off',

  // This rule is aimed to flag class methods that do not use this.
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': 'off',

  // This rule enforces consistent use of trailing commas in object and array literals.
  // https://eslint.org/docs/rules/comma-dangle
  // covered by prettier
  'comma-dangle': 'off',

  // This rule enforces consistent spacing before and after commas in variable declarations,
  // array literals, object literals, function parameters, and sequences.
  // https://eslint.org/docs/rules/comma-spacing
  // extended in @typescript-eslint
  'comma-spacing': 'off',

  // This rule enforce consistent comma style in array literals, object literals, and variable declarations.
  // https://eslint.org/docs/rules/comma-style
  // covered by prettier
  'comma-style': 'off',

  // This rule is aimed at reducing code complexity by capping the amount of cyclomatic complexity allowed in a program.
  // https://eslint.org/docs/rules/complexity
  complexity: ['error', 12],

  // This rule enforces consistent spacing inside computed property brackets.
  // https://eslint.org/docs/rules/computed-property-spacing
  // covered by prettier
  'computed-property-spacing': 'off',

  // This rule requires return statements to either always or never specify values.
  // https://eslint.org/docs/rules/consistent-return
  // https://github.com/typescript-eslint/typescript-eslint/issues/1277
  'consistent-return': 'off',

  // This rule enforces two things about variables with the designated alias names for this:
  // - If a variable with a designated name is declared, it must be either initialized (in the declaration) or assigned (in the same scope as the declaration) the value this.
  // - If a variable is initialized or assigned the value this, the name of the variable must be a designated alias.
  // https://eslint.org/docs/rules/consistent-this
  'consistent-this': ['error', 'that'],

  // This rule is aimed to flag invalid/missing super() calls.
  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': ['error'],

  // This rule is aimed at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces.
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'all'],

  // This rule aims to require default case in switch statements.
  // https://eslint.org/docs/rules/default-case
  'default-case': [
    'error',
    {
      commentPattern: '^no default$',
    },
  ],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': ['error'],

  // enforce default parameters to be last
  // https://eslint.org/docs/rules/default-param-last
  // extended in @typescript-eslint
  'default-param-last': 'off',

  // enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  // covered by prettier
  'dot-location': 'off',

  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  // extended in @typescript-eslint
  'dot-notation': [
    'error',
    {
      allowKeywords: true,
    },
  ],

  // enforce newline at the end of file, with no multiple empty lines
  // https://eslint.org/docs/rules/eol-last
  // covered by prettier
  'eol-last': 'off',

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: [
    'error',
    'always',
    {
      null: 'never',
    },
  ],

  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': ['error'],

  // enforce spacing between functions and their invocations
  // https://eslint.org/docs/rules/func-call-spacing
  // extended in @typescript-eslint
  'func-call-spacing': 'off',

  // requires function names to match the name of the variable or property to which they are assigned
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': [
    'off',
    'always',
    {
      includeCommonJSModuleExports: false,
    },
  ],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  'func-names': ['warn', 'never'],

  // This rule enforces a particular type of function style throughout a JavaScript file, either declarations or expressions
  // https://eslint.org/docs/rules/func-style
  'func-style': [
    'error',
    'declaration',
    {
      allowArrowFunctions: true,
    },
  ],

  // enforce line breaks between arguments of a function call
  // https://eslint.org/docs/rules/function-call-argument-newline
  // covered by prettier
  'function-call-argument-newline': 'off',

  // This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
  // https://eslint.org/docs/rules/function-paren-newline
  // covered by prettier
  'function-paren-newline': 'off',

  // Enforce spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  // covered by prettier
  'generator-star-spacing': 'off',

  // This rule enforces that a return statement is present in property getters.
  // https://eslint.org/docs/rules/getter-return
  // covered by typescript
  'getter-return': 'off',

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'off',

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': ['error'],

  // This rule disallows specified identifiers in assignments and function definitions.
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  // https://eslint.org/docs/rules/id-length
  'id-length': 'off',

  // require identifiers to match the provided regular expression
  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // This rule aims to enforce a consistent location for an arrow function containing an implicit return.
  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  // covered by prettier
  'implicit-arrow-linebreak': 'off',

  // This rule enforces a consistent indentation style.
  // https://eslint.org/docs/rules/indent
  // extended in @typescript-eslint
  indent: 'off',

  // This rule is aimed at enforcing or eliminating variable initializations during declaration.
  // https://eslint.org/docs/rules/init-declarations
  'init-declarations': 'off',

  // specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  // covered by prettier
  'jsx-quotes': 'off',

  // This rule enforces consistent spacing between keys and values in object literal properties
  // https://eslint.org/docs/rules/key-spacing
  // covered by prettier
  'key-spacing': 'off',

  // This rule enforces consistent spacing around keywords and keyword-like tokens.
  // https://eslint.org/docs/rules/keyword-spacing
  // covered by prettier
  'keyword-spacing': 'off',

  // This rule enforces consistent position of line comments.
  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': 'off',

  // This rule enforces consistent line endings across your codebase.
  // https://eslint.org/docs/rules/linebreak-style
  // covered by prettier
  'linebreak-style': 'off',

  // enforces empty lines around comments
  // https://eslint.org/docs/rules/lines-around-comment
  // covered by prettier
  'lines-around-comment': 'off',

  // require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  // In testing - this rule is just plain annoying and bloats the class defs, esp if there are a number of getter/setters
  'lines-between-class-members': 'off',

  // This rule enforces that each file may contain only a particular number of classes and no more.
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // This rule enforces a maximum depth that blocks can be nested to reduce code complexity.
  // https://eslint.org/docs/rules/max-depth
  'max-depth': ['error', 4],

  // This rule enforces a maximum line length to increase code readability and maintainability.
  // The length of a line is defined as the number of Unicode characters in the line.
  // https://eslint.org/docs/rules/max-len
  // covered by prettier
  'max-len': 'off',

  // This rule enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity.
  // https://eslint.org/docs/rules/max-lines
  'max-lines': 'off',

  // This rule enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity.
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': [
    'off',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // his rule enforces a maximum depth that callbacks can be nested to increase code clarity.
  // https://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': ['error', 5],

  // This rule enforces a maximum number of parameters allowed in function definitions
  // https://eslint.org/docs/rules/max-params
  'max-params': ['error', 5],

  // This rule enforces a maximum number of statements allowed in function blocks
  // https://eslint.org/docs/rules/max-statements
  'max-statements': 'off',

  // This rule enforces a maximum number of statements allowed per line.
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': 'off',

  // This rule aims to enforce a particular style for multiline comments.
  // https://eslint.org/docs/rules/multiline-comment-style
  // TODO - do we want to enable this?
  'multiline-comment-style': ['off', 'starred-block'],

  // This rule enforces or disallows newlines between operands of a ternary expression.
  // Note: The location of the operators is not enforced by this rule.
  // Please see the operator-linebreak rule if you are interested in enforcing the location of the operators themselves.
  // https://eslint.org/docs/rules/multiline-ternary
  // covered by prettier
  'multiline-ternary': 'off',

  // This rule requires constructor names to begin with a capital letter.
  // https://eslint.org/docs/rules/new-cap
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  // disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.org/docs/rules/new-parens
  // covered by prettier
  'new-parens': 'off',

  // enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.org/docs/rules/newline-per-chained-call
  // covered by prettier
  'newline-per-chained-call': 'off',

  // This rule is aimed at catching debugging code that should be removed and popup UI elements that should be
  // replaced with less obtrusive, custom UIs
  // https://eslint.org/docs/rules/no-alert
  'no-alert': ['error'],

  // This rule disallows Array constructors for anything other than using it to create an empty array of length N.
  // https://eslint.org/docs/rules/no-array-constructor
  // extended in @typescript-eslint
  'no-array-constructor': 'off',

  // The new Promise constructor accepts an executor function as an argument, which has resolve and reject parameters that can be used to control the state of the created Promise
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': ['error'],

  // This rule disallows the use of await within loop bodies.
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': ['error'],

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': ['error'],

  // This rule is aimed at discouraging the use of deprecated and sub-optimal code,
  // by disallowing the use of arguments.caller and arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': ['error'],

  // This rule aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across case clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': ['error'],

  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': ['error'],

  // The rule should warn against code that tries to compare against -0, since that will not work as intended
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': ['error'],

  // This rule disallows ambiguous assignment operators in test conditions of if, for, while, and do...while statements.
  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  'no-confusing-arrow': 'off',

  // This rule disallows calls to methods of the console object.
  // https://eslint.org/docs/rules/no-console
  'no-console': [
    'error',
    {
      allow: ['info', 'error', 'warn', 'time', 'timeEnd', 'trace'],
    },
  ],

  // This rule is aimed to flag modifying variables that are declared using const keyword.
  // https://eslint.org/docs/rules/no-const-assign
  // covered by typescript
  'no-const-assign': 'off',

  // Disallow expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  'no-constant-binary-expression': ['error'],

  // This rule disallows constant expressions in the test condition.
  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': ['error'],

  // This rule disallows continue statements.
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'off',

  // This rule disallows control characters in regular expressions.
  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': ['error'],

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': ['error'],

  // This rule disallows debugger statements
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': ['error'],

  // This rule disallows the use of the delete operator on variables.
  // https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': ['error'],

  // This is used to disambiguate the division operator to not confuse users.
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // This rule disallows duplicate parameter names in function declarations or expressions
  // https://eslint.org/docs/rules/no-dupe-args
  // covered by typescript
  'no-dupe-args': 'off',

  // This rule is aimed to flag the use of duplicate names in class members.
  // https://eslint.org/docs/rules/no-dupe-class-members
  // covered by typescript
  'no-dupe-class-members': 'off',

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': ['error'],

  // This rule disallows duplicate keys in object literals.
  // https://eslint.org/docs/rules/no-dupe-keys
  // covered by typescript
  'no-dupe-keys': 'off',

  // This rule disallows duplicate test expressions in case clauses of switch statements.
  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': ['error'],

  // This rules requires that all imports from a single module exists in a single import statement.
  // https://eslint.org/docs/rules/no-duplicate-imports
  // using import/no-duplicates instead
  'no-duplicate-imports': 'off',

  // This rule is aimed at highlighting an unnecessary block of code following an if containing a return statement.
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': [
    'error',
    {
      allowElseIf: false,
    },
  ],

  // This rule disallows empty block statements
  // https://eslint.org/docs/rules/no-empty
  'no-empty': ['error'],

  // This rule disallows empty character classes in regular expressions.
  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': ['error'],

  // This rule is aimed at eliminating empty functions.
  // https://eslint.org/docs/rules/no-empty-function
  // extended in @typescript-eslint
  'no-empty-function': 'off',

  // This rule aims to flag any empty patterns in destructured objects and arrays, and as such,
  // will report a problem whenever one is encountered.
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': ['error'],

  // This rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to null only match null,
  // and not also undefined.
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by
  // disallowing the use of the eval() function.
  // https://eslint.org/docs/rules/no-eval
  'no-eval': ['error'],

  // This rule disallows reassigning exceptions in catch clauses
  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': ['error'],

  // Disallows directly modifying the prototype of builtin objects.
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': ['error'],

  // This rule is aimed at avoiding the unnecessary use of bind() and as such will warn whenever an
  // immediately-invoked function expression (IIFE) is using bind() and doesn’t have an appropriate this value.
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': ['error'],

  // This rule disallows unnecessary boolean casts
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': ['error'],

  // This rule is aimed at eliminating unnecessary labels.
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': ['error'],

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  // extended in @typescript-eslint
  'no-extra-parens': 'off',

  // This rule disallows unnecessary semicolons
  // https://eslint.org/docs/rules/no-extra-semi
  // extended in @typescript-eslint
  'no-extra-semi': 'off',

  // This rule is aimed at eliminating unintentional fallthrough of one case to the other.
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': ['error'],

  // This rule is aimed at eliminating floating decimal points and will warn whenever a numeric value has a
  // decimal point but is missing a number either before or after it.
  // https://eslint.org/docs/rules/no-floating-decimal
  // covered by prettier
  'no-floating-decimal': 'off',

  // This rule disallows reassigning function declarations
  // https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': ['error'],

  // This rule disallows modifications to read-only global variables
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error'],

  // This rule is aimed to flag shorter notations for the type conversion, then suggest a more self-explanatory notation.
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': 'off',

  // This rule disallows var and named function declarations at the top-level script scope.
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': ['error'],

  // This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or execScript().
  // https://eslint.org/docs/rules/no-implied-eval
  // extended in @typescript-eslint
  'no-implied-eval': 'off',

  // disallow assigning to imported bindings
  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'off',

  // This rule disallows comments on the same line as code.
  // https://eslint.org/docs/rules/no-inline-comments
  'no-inline-comments': 'off',

  // This rule requires that function declarations and, optionally, variable declarations be in the root of a
  // program or the body of a function.
  // https://eslint.org/docs/rules/no-inner-declarations
  'no-inner-declarations': ['error', 'functions'],

  // This rule disallows invalid regular expression strings in RegExp constructors.
  // https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': ['error'],

  // This rule aims to flag usage of this keywords outside of classes or class-like objects.
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // This rule is aimed at catching invalid whitespace that is not a normal tab and space
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': ['error'],

  // This rule is aimed at preventing errors that may arise from using the __iterator__ property.
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': ['error'],

  // This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name
  // with a variable that is in scope
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': ['error'],

  // This rule aims to eliminate the use of labelled statements in JavaScript
  // Seriously. WHY WOULD YOU USE LABEL STATEMENTS IN JAVASCRIPT. WTF.
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error'],

  // This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': ['error'],

  // This rule disallows if statements as the only statement in else blocks
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': ['error'],

  // Disallow Functions in Loops.
  // https://eslint.org/docs/rules/no-loop-func
  // extended in @typescript-eslint
  'no-loop-func': 'off',

  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  // extended in @typescript-eslint
  'no-loss-of-precision': 'off',

  // This rule aims to make code more readable by ensuring that special numbers are declared as constants
  // https://eslint.org/docs/rules/no-magic-numbers
  // extended in @typescript-eslint
  'no-magic-numbers': 'off',

  // Disallow characters which are made with multiple code points in character class syntax, basically disallows emojis to be used as class names
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': ['error'],

  // Disallow mixes of different operators
  // https://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': [
    'error',
    {
      // the list of arithmetic groups disallows mixing `%` and `**` with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    },
  ],

  // disallow mixed spaces and tabs for indentation
  // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  // covered by prettier
  'no-mixed-spaces-and-tabs': 'off',

  // Disallow Use of Chained Assignment Expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // Disallow multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  // covered by prettier
  'no-multi-spaces': 'off',

  // This rule is aimed at preventing the use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': ['error'],

  // This rule aims to reduce the scrolling required when reading through your code
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  // covered by prettier
  'no-multiple-empty-lines': 'off',

  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // disallow nested ternary expressions
  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': ['error'],

  // Disallow new For Side Effects
  // https://eslint.org/docs/rules/no-new
  'no-new': ['error'],

  // Disallow Function Constructor
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': ['error'],

  // disallow `Object` constructors
  // https://eslint.org/docs/rules/no-new-object
  'no-new-object': ['error'],

  // This rule is aimed at preventing the accidental calling of Symbol with the new operator
  // https://eslint.org/docs/rules/no-new-symbol
  // covered by typescript
  'no-new-symbol': 'off',

  // This rule aims to eliminate the use of String, Number, and Boolean with the new operator
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': ['error'],

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': ['error'],

  // This rule disallows calling the Math, JSON and Reflect objects as functions
  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': ['error'],

  // The rule disallows octal literals
  // https://eslint.org/docs/rules/no-octal
  'no-octal': ['error'],

  // This rule disallows octal escape sequences in string literals
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': ['error'],

  // This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters
  // https://eslint.org/docs/rules/no-param-reassign
  'no-param-reassign': 'off',

  // disallow the unary operators ++ and --
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: false,
    },
  ],

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': ['error'],

  // When an object is created __proto__ is set to the original prototype property of the object’s constructor function.
  // https://eslint.org/docs/rules/no-proto
  'no-proto': ['error'],

  // This rule disallows calling some Object.prototype methods directly on object instances
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': ['error'],

  // This rule is aimed at eliminating variables that have multiple declarations in the same scope
  // https://eslint.org/docs/rules/no-redeclare
  // covered by typescript
  'no-redeclare': 'off',

  // This rule disallows multiple spaces in regular expression literals
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': ['error'],

  // This rule allows you to specify global variable names that you don’t want to use in your application
  // https://eslint.org/docs/rules/no-restricted-globals
  'no-restricted-globals': ['error', 'isFinite', ...restrictedGlobals],

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  'no-restricted-exports': 'off',

  // This rule allows you to specify imports that you don’t want to use in your application
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

  // This rule looks for accessing a given property key on a given object name, either when reading the property’s
  // value or invoking it as a function
  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],

  // This rule disallows specified (that is, user-defined) syntax
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // This rule aims to eliminate assignments from return statements
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of async function
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': ['error'],

  // Disallow Script URLs
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': ['error'],

  // This rule is aimed at eliminating self assignments.
  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': ['error'],

  // This error is raised to highlight a potentially confusing and potentially pointless piece of code.
  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': ['error'],

  // Disallow Use of the Comma Operator
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': ['error'],

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  // covered by typescript
  'no-setter-return': 'off',

  // disallow variable declarations from shadowing variables declared in the outer scope
  // https://eslint.org/docs/rules/no-shadow
  // extended in @typescript-eslint
  'no-shadow': 'off',

  // Disallow Shadowing of Restricted Names
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': ['error'],

  // This rule disallows sparse array literals which have “holes” where commas are not preceded by elements
  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': ['error'],

  // This rule looks for tabs anywhere inside a file: code, comments or anything else
  // https://eslint.org/docs/rules/no-tabs
  // covered by prettier, but leave it on to be really explicit
  'no-tabs': ['error'],

  // Disallow template literal place-holder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': ['error'],

  // This rule disallows ternary operators
  // https://eslint.org/docs/rules/no-ternary
  'no-ternary': 'off',

  // This rule is aimed to flag this/super keywords before super() callings
  // https://eslint.org/docs/rules/no-this-before-super
  // covered by typescript
  'no-this-before-super': 'off',

  // This rule is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other
  // expressions which cannot possibly be an Error object
  // https://eslint.org/docs/rules/no-throw-literal
  // extended in @typescript-eslint
  'no-throw-literal': 'off',

  // This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines
  // https://eslint.org/docs/rules/no-trailing-spaces
  // covered by prettier
  'no-trailing-spaces': 'off',

  // Disallow Undeclared Variables
  // https://eslint.org/docs/rules/no-undef
  // covered by typescript
  'no-undef': 'off',

  // Disallow Initializing to undefined
  // https://eslint.org/docs/rules/no-undef-init
  'no-undef-init': ['error'],

  // This rule aims to eliminate the use of undefined, and as such, generates a warning whenever it is used
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // This rule disallows dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false,
    },
  ],

  // This rule disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': ['error'],

  // This rule finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': ['error'],

  // This rule disallow ternary operators when simpler alternatives exist
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],

  // This rule disallows unreachable code after return, throw, continue, and break statements
  // https://eslint.org/docs/rules/no-unreachable
  // covered by typescript
  'no-unreachable': 'off',

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  'no-unreachable-loop': ['error'],

  // This rule disallows return, throw, break, and continue statements inside finally blocks.
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': ['error'],

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': ['error'],

  // Disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': ['error'],

  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  // extended in @typescript-eslint
  'no-unused-expressions': 'off',

  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': ['error'],

  // disallow declaration of variables that are not used in the code
  // https://eslint.org/docs/rules/no-unused-vars
  // extended in @typescript-eslint
  'no-unused-vars': 'off',

  // Disallow unused private class members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  'no-unused-private-class-members': ['error'],

  // Disallow useless back references in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'off',

  // This rule will warn when it encounters a reference to an identifier that has not yet been declared
  // https://eslint.org/docs/rules/no-use-before-define
  // extended in @typescript-eslint
  'no-use-before-define': 'off',

  // This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply()
  // that can be replaced with the normal function invocation.
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': ['error'],

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'off',

  // This rule disallows unnecessary usage of computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': ['error'],

  // This rule aims to flag the concatenation of 2 literals when they could be combined into a single literal
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': ['error'],

  // This rule flags class constructors that can be safely removed without changing how the class works.
  // https://eslint.org/docs/rules/no-useless-constructor
  // extended in @typescript-eslint
  'no-useless-constructor': 'off',

  // This rule flags escapes that can be safely removed without changing behavior.
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': ['error'],

  // This rule disallows the renaming of import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // This rule aims to report redundant return statements
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': ['error'],

  // This rule is aimed at discouraging the use of var and encouraging the use of const or let instead
  // https://eslint.org/docs/rules/no-var
  'no-var': ['error'],

  // This rule aims to eliminate use of void operator
  // https://eslint.org/docs/rules/no-void
  'no-void': [
    'error',
    {
      allowAsStatement: true,
    },
  ],

  // This rule reports comments that include any of the predefined terms specified in its configuration
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': 'off',

  // This rule disallows whitespace around the dot or before the opening bracket before properties of objects
  // if they are on the same line
  // https://eslint.org/docs/rules/no-whitespace-before-property
  // covered by prettier
  'no-whitespace-before-property': 'off',

  // This rule disallows with statements
  // https://eslint.org/docs/rules/no-with
  'no-with': ['error'],

  // This rule aims to enforce a consistent location for single-line statements
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  'nonblock-statement-body-position': [
    'error',
    'beside',
    {
      overrides: {},
    },
  ],

  // This rule enforces consistent line breaks inside braces of object literals or destructuring assignments
  // https://eslint.org/docs/rules/object-curly-newline
  // covered by prettier
  'object-curly-newline': 'off',

  // This rule enforce consistent spacing inside braces of object literals, destructuring assignments,
  // and import/export specifiers
  // https://eslint.org/docs/rules/object-curly-spacing
  // covered by prettier
  'object-curly-spacing': 'off',

  // enforce placing object properties on separate lines
  // https://eslint.org/docs/rules/object-property-newline
  // covered by prettier
  'object-property-newline': 'off',

  // Require Object Literal Shorthand Syntax
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // enforce variables to be declared either together or separately in functions
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],

  // require or disallow newlines around variable declarations
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  // covered by prettier
  'one-var-declaration-per-line': 'off',

  // require or disallow assignment operator shorthand where possible
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // This rule enforces a consistent linebreak style for operators.
  // https://eslint.org/docs/rules/operator-linebreak
  // handled by prettier
  'operator-linebreak': 'off',

  // This rule enforces consistent empty line padding within blocks
  // https://eslint.org/docs/rules/padded-blocks
  // covered by prettier
  'padded-blocks': 'off',

  // Require or disallow padding lines between statements
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Require using arrow functions for callbacks
  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // This rule is aimed at flagging variables that are declared using let keyword,
  // but never reassigned after the initial assignment
  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': 'off',

  // Disallow the use of Math.pow in favour of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': ['error'],

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  // TODO - enable this when it's widely supported?
  'prefer-named-capture-group': 'off',

  // This rule disallows calls to parseInt() or Number.parseInt() if called with two arguments:
  // a string; and a radix option of 2 (binary), 8 (octal), or 16 (hexadecimal).
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': ['error'],

  // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': ['error'],

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'off',

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true,
    },
  ],

  // Disallow use of the RegExp constructor in favour of regular expression literals
  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': ['error'],

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': ['error'],

  // suggest using the spread operator instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': ['error'],

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': ['error'],

  // require quotes around object literal property names
  // https://eslint.org/docs/rules/quote-props
  // covered by prettier
  'quote-props': 'off',

  // This rule enforces the consistent use of either backticks, double, or single quotes.
  // https://eslint.org/docs/rules/quotes
  // covered by prettier
  quotes: 'off',

  // This rule is aimed at preventing the unintended conversion of a string to a number of a different base
  // than intended or at preventing the redundant 10 radix if targeting modern environments only.
  // https://eslint.org/docs/rules/radix
  radix: ['error', 'always'],

  // This rule warns async functions which have no await expression
  // https://eslint.org/docs/rules/require-atomic-updates
  'require-atomic-updates': ['error'],

  // This rule warns async functions which have no await expression
  // https://eslint.org/docs/rules/require-await
  // extended in @typescript-eslint
  'require-await': 'off',

  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': ['error'],

  // This rule generates warnings for generator functions that do not have the yield keyword.
  // https://eslint.org/docs/rules/require-yield
  'require-yield': ['error'],

  // This rule aims to enforce consistent spacing between rest and spread operators and their expressions.
  // https://eslint.org/docs/rules/rest-spread-spacing
  // covered by prettier
  'rest-spread-spacing': 'off',

  // This rule enforces consistent use of semicolons.
  // https://eslint.org/docs/rules/semi
  // covered by prettier
  semi: 'off',

  // This rule aims to enforce spacing around a semicolon.
  // https://eslint.org/docs/rules/semi-spacing
  // covered by prettier
  'semi-spacing': 'off',

  // This rule reports line terminators around semicolons
  // https://eslint.org/docs/rules/semi-style
  // covered by prettier
  'semi-style': 'off',

  // This rule checks all import declarations and verifies that all imports are first sorted by the used member
  // syntax and then alphabetically by the first member or alias name.
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': 'off',

  // This rule checks all property definitions of object expressions and verifies that all variables are sorted alphabetically
  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': 'off',

  // This rule checks all variable declaration blocks and verifies that all variables are sorted alphabetically
  // https://eslint.org/docs/rules/sort-vars
  'sort-vars': 'off',

  // This rule will enforce consistency of spacing before blocks
  // https://eslint.org/docs/rules/space-before-blocks
  // covered by prettier
  'space-before-blocks': 'off',

  // This rule aims to enforce consistent spacing before function parentheses.
  // https://eslint.org/docs/rules/space-before-function-paren
  // extended in @typescript-eslint
  'space-before-function-paren': 'off',

  // This rule will enforce consistency of spacing directly inside of parentheses.
  // https://eslint.org/docs/rules/space-in-parens
  // covered by prettier
  'space-in-parens': 'off',

  // require spaces around operators
  // https://eslint.org/docs/rules/space-infix-ops
  // covered by prettier
  'space-infix-ops': 'off',

  // Require or disallow spaces before/after unary operators
  // https://eslint.org/docs/rules/space-unary-ops
  // covered by prettier
  'space-unary-ops': 'off',

  // require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': [
    'warn',
    'always',
    {
      markers: ['*', '/'],
    },
  ],

  // This rule requires or disallows strict mode directives
  // https://eslint.org/docs/rules/strict
  strict: ['error', 'global'],

  // This rule controls spacing around colons of case and default clauses in switch statements
  // https://eslint.org/docs/rules/switch-colon-spacing
  // covered by prettier
  'switch-colon-spacing': 'off',

  // This rules requires a description when creating symbols
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': ['error'],

  // enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  // covered by prettier
  'template-curly-spacing': 'off',

  // Require or disallow spacing between template tags and their literals
  // https://eslint.org/docs/rules/template-tag-spacing
  // covered by prettier
  'template-tag-spacing': 'off',

  // Require or disallow the Unicode Byte Order Mark (BOM)
  // https://eslint.org/docs/rules/unicode-bom
  // covered by prettier
  'unicode-bom': 'off',

  // require calls to isNaN() when checking for NaN
  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': ['error'],

  // This rule enforces comparing typeof expressions to valid string literals
  // https://eslint.org/docs/rules/valid-typeof
  // covered by typescript
  'valid-typeof': 'off',

  // Require Variable Declarations to be at the top of their scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': ['error'],

  // require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife.html
  // covered by prettier
  'wrap-iife': 'off',

  // Require Regex Literals to be Wrapped
  // https://eslint.org/docs/rules/wrap-regex
  // covered by prettier
  'wrap-regex': 'off',

  // This rule enforces spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  // covered by prettier
  'yield-star-spacing': 'off',

  // This rule aims to enforce consistent style of conditions which compare a variable to a literal value.
  // https://eslint.org/docs/rules/yoda
  yoda: ['error', 'never'],
};

export default {
  rules,
};
