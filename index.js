const cjpDictWord = require('./dict/word.json')
const cjpDictKana = require('./dict/kana.json')
const cjpDictKanji = require('./dict/kanji.json')
const cjpDictEmoji = require('./dict/emoji.json')

const strData = class {
    constructor({ text = '', replaced = [] }) {
        this.text = typeof text !== 'string' ? '' : text
        this.replaced = Array.isArray(replaced) ? replaced : []
    }
}

const replaceStrDataWithDict = (data, dict = {}) => {
    if (!data.text) return new strData(data)
    for (const orig in dict) {
        let changed = false
        const translateStr = []
        const splited = data.text.split(new RegExp(orig, 'g'))
        for (let i = 0; i < splited.length - 1; i++) {
            translateStr.push(splited[i])
            const begin = translateStr.join('').length
            const end = begin + orig.length - 1
            if (
                data.replaced.some(
                    d =>
                        (d.begin <= begin && begin <= d.end) ||
                        (d.begin <= end && end <= d.end)
                )
            ) {
                translateStr.push(orig)
                continue
            } else {
                translateStr.push(dict[orig])
                changed = true
                if (orig.length == dict[orig].length) {
                    data.replaced.push({ begin, end })
                } else {
                    const diffLen = dict[orig].length - orig.length
                    data.replaced = data.replaced.map(d =>
                        begin < d.begin
                            ? { begin: d.begin + diffLen, end: d.end + diffLen }
                            : d
                    )
                    data.replaced.push({ begin, end: end + diffLen })
                }
            }
        }
        if (changed) {
            translateStr.push(splited.slice(-1)[0])
            data.text = translateStr.join('')
        }
    }
    return new strData(data)
}

const translate = (text = '') => {
    if (typeof text !== 'string') throw new Error('Invalid Text')
    if (!text) return ''
    let data = new strData({ text })
    data = replaceStrDataWithDict(data, cjpDictWord)
    data = replaceStrDataWithDict(data, cjpDictKana)
    data = replaceStrDataWithDict(data, cjpDictKanji)
    data = replaceStrDataWithDict(data, cjpDictEmoji)
    return data.text
}

module.exports = {
    strData,
    replaceStrDataWithDict,
    translate
}
