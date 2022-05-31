import { replace, json2Dict } from "@submarin/generator"
import type { TextData } from "@submarin/generator"

import jsonCommon from "./dict/common.json"
import jsonPNoun from "./dict/propernoun.json"
import jsonKana from "./dict/kana.json"
import jsonKanji from "./dict/kanji.json"
import jsonEmoji from "./dict/emoji.json"

export const generate = (text: string = "") => {
  let data: TextData = { text, replaced: [] }

  data = replace(data, json2Dict(jsonEmoji))
  data = replace(data, json2Dict(jsonPNoun))
  data = replace(data, json2Dict(jsonCommon))
  data = replace(data, json2Dict(jsonKana))
  data = replace(data, json2Dict(jsonKanji))

  return data.text
}

export default generate
