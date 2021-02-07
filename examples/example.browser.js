// このファイルをエントリーポイントにしてbundlerを走らせるとよいでしょう。
// コマンド例:
//   npx -y parcel-bundler build ./example.browser.js
// そうすると(parcelの場合は)新しくディレクトリが作られ、
// 中に出来上がったjsファイルがあるはずです。

window.cjp = require('cjp')
