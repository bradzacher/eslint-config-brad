// module.exports = require('./build/prettier.js');

/** @type {import('@types/prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
