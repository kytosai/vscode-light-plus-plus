const fs = require('fs').promises;
const JSON5 = require('json5');

const jsonHelper = {
  async readFile(path) {
    if (typeof path !== 'string') {
      return undefined;
    }

    let jsonDecoded = null;
    try {
      const fileContent = await fs.readFile(path, 'utf8');
      jsonDecoded = JSON5.parse(fileContent);
    } catch (e) {
      console.log(e);
    }

    return jsonDecoded;
  },
};

module.exports = jsonHelper;
