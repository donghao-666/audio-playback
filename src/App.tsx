import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const synth = window.speechSynthesis;
  const message = new SpeechSynthesisUtterance();

  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const voicePlay = (text: string) => {
    message.text = text;
    message.lang = "zh";
    message.rate = 1; //语速设置，数字越大越快
    synth.speak(message);
  }

  return (
    <div>
      <textarea placeholder='请输入文字' value={value} onChange={onChange}></textarea>
      <button onClick={() => {
        voicePlay(value)
      }}>播放</button>
    </div>
  )
}

export default App
