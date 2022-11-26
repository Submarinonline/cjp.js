import { useState } from "react"
import { generate } from "cjp"

export default function App() {
  const [text, setText] = useState()

  return (
    <>
      <textarea value={text} onChange={val => setText(val.target.value)} />
      <textarea value={generate(text)} readOnly />
    </>
  )
}
