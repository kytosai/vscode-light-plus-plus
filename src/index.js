const fs = require('fs').promises;
const jsonHelper = require('./jsonHelper');

const vscodeLightDefault = jsonHelper.parseFile('./src/themes/vscode-default/light_vs.json');
const vscodeLightPlusDefault = jsonHelper.parseFile('./src/themes/vscode-default/light_plus.json');
const vscodeLightPlusPlus = jsonHelper.parseFile('./src/themes/vscode-light-plus-plus/vscode-light-plus-plus.json');

fs.mkdir('./themes', { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        './themes/light_vs.json',
        JSON.stringify(vscodeLightDefault, null, 2),
      ),
      fs.writeFile(
        './themes/light_plus.json',
        JSON.stringify(vscodeLightPlusDefault, null, 2),
      ),
      fs.writeFile(
        './themes/vscode-light-plus-plus.json',
        JSON.stringify(vscodeLightPlusPlus, null, 2),
      ),
    ]),
  )
  .catch(() => process.exit(1));
