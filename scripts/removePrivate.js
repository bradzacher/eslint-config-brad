// eslint-disable-next-line strict
'use strict'

const fs = require('fs')
const packageJson = require('../package.json')
const path = require('path')

delete packageJson.private
// the postinstall should only be used locally...
delete packageJson.scripts.postinstall

fs.writeFileSync(path.resolve(__dirname, '../dist/package.json'), JSON.stringify(packageJson, null, 2))
