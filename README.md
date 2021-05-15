# VSCode theme ++


## Install



## How to develop ?

- Install package

```sh
npm install
```

- Get new vscode default light theme config from github if you want 

```sh
npm run update-vscode-default-theme
```

- Edit config theme in `./src/themes/vscode-light-plus-plus/vscode-light-plus-plus.json` 
- Press `F5` to open a new window with your extension loaded.
- Open `File > Preferences > Color Themes` and pick `VSCode Light++`.

## How to build `.json` theme file ?

- Install package

```sh
npm install
```

- Get new vscode default light theme config from github if you want 

```sh
npm run update-vscode-default-theme
```

- Build

```sh
npm run build
```

- Check file `themes/vscode-light-plus-plus.json` with new config

## Acknowledgements

- [VSCode light theme config file](https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/light_vs.json)
- [VSCode light+ theme config file](https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/light_plus.json)
- [Use package json5 to parse .json file](https://github.com/json5/json5)
- [Theme Color](https://code.visualstudio.com/api/references/theme-color)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)