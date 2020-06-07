declare module 'eslint-find-rules' {
  type Fn = (
    path: string,
  ) => {
    getAllAvailableRules: () => Array<string>;
  };

  const ret: Fn;
  export = ret;
}
