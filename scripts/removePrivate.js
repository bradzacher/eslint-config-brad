'use strict'

const fs = require('fs')
const packageJson = require('../package.json')
const path = require('path')

delete packageJson.private

fs.writeFileSync(path.resolve(__dirname, '../dist/package.json'), JSON.stringify(packageJson, null, 2))
