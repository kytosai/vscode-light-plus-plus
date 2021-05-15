const fs = require('fs');
const JSON5 = require('json5');

const jsonHelper = {
  parseFile(path) {
    if (typeof path !== 'string') {
      return undefined;
    }

    const fileContent = fs.readFileSync(path, 'utf8')        
    const jsonDecoded = JSON5.parse(fileContent);
    
    return jsonDecoded;
  },
};

module.exports = jsonHelper;
