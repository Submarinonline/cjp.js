# cjp (correctJP)

[![npm version](https://badge.fury.io/js/cjp.svg)](https://www.npmjs.com/package/cjp)

怪レい翻訳ライブラリ

[使用例](https://github.com/DevSubmarinonline/correctJP-web)

## 使い方

### Node

```js
const { generate } = require('cjp')

console.log(generate('おはようございます'))
```

### その他

`examples/`に何個かサンプルを置いています

#### Node, Vue

サンプルがそのまま使えます

#### HTML 手書きの場合

`examples/example.browser.js`を parcel 等でバンドルしましょう
