import fs from 'fs';
import path from 'path';

import packageJson = require('../package.json');

delete packageJson.private;
// no need to publis these props
delete packageJson.scripts;
delete packageJson.husky;
delete packageJson.devDependencies;
delete packageJson.resolutions;

fs.writeFileSync(
  path.resolve(__dirname, '../dist/package.json'),
  JSON.stringify(packageJson, null, 2),
);
