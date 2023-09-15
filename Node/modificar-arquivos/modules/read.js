const fs = require('fs').promises

module.exports = (filepath) => fs.readFile(filepath, 'utf8')

