import fs from 'fs';
import path from 'path';

import packageJson = require('../package.json');

delete packageJson.private;
// the postinstall should only be used locally...
delete packageJson.scripts.postinstall;
fs.writeFileSync(
  path.resolve(__dirname, '../dist/package.json'),
  JSON.stringify(packageJson, null, 2),
);
