function toPascalCase(name: string): string {
  const camel = name
    .replace(/(-\w)/gu, m => m[1].toUpperCase())
    .replace(/^(@\w)/u, m => m[1].toUpperCase())
    .replace(/\/./u, s => s[1].toUpperCase());
  const pascal = camel[0].toUpperCase() + camel.substr(1);

  return pascal;
}

export { toPascalCase };
