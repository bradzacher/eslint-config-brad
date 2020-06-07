function toPascalCase(name: string): string {
  const camel = name
    .replace(/(-\w)/g, m => m[1].toUpperCase())
    .replace(/^(@\w)/, m => m[1].toUpperCase())
    .replace(/\/./, s => s[1].toUpperCase());
  const pascal = camel[0].toUpperCase() + camel.substr(1);

  return pascal;
}

export { toPascalCase };
