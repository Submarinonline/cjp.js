# cjp (correctJP)

[![npm version](https://badge.fury.io/js/cjp.svg)](https://badge.fury.io/js/cjp)

怪レい翻訳ライブラリ

## 使い方(Node)

```js
const { translate } = require('cjp')

console.log(translate('おはようございます'))
```

## 使い方(HTML)

### 自前ビルド

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

を実行します。(バンドラーはお好みのものを)  
parcelの場合は`dist`以下に圧縮されたjsファイルがあるので、

```html
<script src="/path/to/cjp.js"></script>
<script>
    console.log(cjp.translate('おはようございます'))
</script>
```

という風に使えるはずです

### 仕様変更を追える人

今動いていても将来動いているかは知らないよ

```html
<script src="https://lib.sbmr.in/cjp.js"></script>
<script>
    console.log(cjp.translate('おはようございます'))
</script>
```
