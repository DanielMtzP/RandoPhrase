import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import autores from'./json/autores.json'
import colors from './utilis/Colors'

function App() {

  const getRandomElemnt = arr =>{
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom] 
  }

  let autorRandom = getRandomElemnt(autores)
  let colorRandom = getRandomElemnt(colors)

  const [randomAutor, setRandomAutor] = useState(autorRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const changeAll = () =>{
    autorRandom = getRandomElemnt(autores)
    colorRandom = getRandomElemnt(colors)

    setRandomAutor(autorRandom)
    setRandomColors(colorRandom)
  }
  const objBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <div className="App" style={objBgStyle}>
      <QuoteBox 
        randomAutor={randomAutor}
        randomColors={randomColors}
        changeAll={changeAll}
      />
    </div>
  )
}

export default App
