const fs = require('fs').promises

module.exports = (filepath, data) => {
  fs.writeFile(filepath, data, {flag: 'w', encoding: 'utf-8'});

}


