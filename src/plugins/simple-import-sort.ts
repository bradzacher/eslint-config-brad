import type { SimpleImportSort } from '../types/simple-import-sort/index';

// https://github.com/lydell/eslint-plugin-simple-import-sort
const rules: SimpleImportSort = {
  'simple-import-sort/exports': 'off',
  'simple-import-sort/imports': ['error'],
};

export default {
  name: 'simple-import-sort',
  rules,
};
