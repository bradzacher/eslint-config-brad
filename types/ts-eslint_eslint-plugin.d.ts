declare module '@typescript-eslint/eslint-plugin' {
  const exprt: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- don't care about the type
    rules: Record<string, any>;
    configs: Record<string, Record<string, string>>;
  };
  export = exprt;
}
