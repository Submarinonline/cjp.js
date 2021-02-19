const { strData, replace } = require('@submarin/generator')

const cjpDictCommon = require('./dict/common.json')
const cjpDictPNoun = require('./dict/propernoun.json')
const cjpDictKana = require('./dict/kana.json')
const cjpDictKanji = require('./dict/kanji.json')
const cjpDictEmoji = require('./dict/emoji.json')

const generate = (text = '') => {
    if (typeof text !== 'string') throw new Error('Invalid Text')
    if (!text) return ''

    let data = new strData({ text })
    data = replace(data, cjpDictEmoji)
    data = replace(data, cjpDictPNoun)
    data = replace(data, cjpDictCommon)
    data = replace(data, cjpDictKana)
    data = replace(data, cjpDictKanji)

    return data.text
}

module.exports = {
    strData,
    generate
}
