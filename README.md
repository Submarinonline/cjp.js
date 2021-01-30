# cjp (correctJP)

[![npm version](https://badge.fury.io/js/cjp.svg)](https://badge.fury.io/js/cjp)

怪レい翻訳ライブラリ

## 使い方

```js
const { translate } = require('cjp')

console.log(translate('おはようございます'))
```

## ブラウザ等に組み込む場合

`index.js`を`cjp.js`等の適当なファイルにコピーした後、ファイル末尾にある

```js
module.export = {...}
```

を

```js
window.cjp = {...}
```

に書き換えて、

```shell
parcel build index.js
```

を実行します(バンドラーはお好みのものを)。
parcelの場合は`dist`以下に圧縮されたjsファイルがあるので、

```html
<script src="/path/to/cjp.js"></script>
<script>
    console.log(cjp.translate('おはようございます'))
</script>
```

という風に使えるはずです
