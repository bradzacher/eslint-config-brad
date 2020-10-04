import fs from 'fs';
import path from 'path';

import packageJsonImport = require('../package.json');

const packageJson: Record<keyof typeof packageJsonImport, unknown> = {
  ...packageJsonImport,
};
delete packageJson.private;
// no need to publish these props
delete packageJson.scripts;
delete packageJson.husky;
delete packageJson.devDependencies;
delete packageJson.resolutions;

fs.writeFileSync(
  path.resolve(__dirname, '../dist/package.json'),
  JSON.stringify(packageJson, null, 2),
);
