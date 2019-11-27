import { ReactHooks } from '../types/react-hooks';

const rules: ReactHooks = {
  // https://reactjs.org/docs/hooks-rules.html
  'react-hooks/rules-of-hooks': ['error'],
  'react-hooks/exhaustive-deps': ['error'],
};
export default {
  name: 'react-hooks',
  rules,
};
