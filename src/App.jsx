import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [wood, setWood] = useState(0)
  const [stone, setStone] = useState(0)

  return (
    <>
      <h1>Un juego incremental</h1>
      <div>
        Wood <Botones count={wood} setCount={setWood} aumentos={[0, 1, 3, 8]} />
        Stone <Botones count={stone} setCount={setStone} aumentos={[1, 5, 10]} />
      </div>
      <p className="recursos">
        wood: {wood} |
        stone: {stone}
      </p>
    </>
  )
}

function Botones({ count, setCount, aumentos }) {
  const [localCount, setLocalCount] = useState(0)

  return (
    <>
      {aumentos.map(aumento => (
        <Aumentar
          count={count}
          setCount={setCount}
          localCount={localCount}
          setLocalCount={setLocalCount}
          aumento={aumento}
        />
      ))}
      Clicks: {localCount}
      <br/>
    </>
  )
}

function Aumentar({ count, setCount, localCount, setLocalCount, aumento}) {

  return (
    <button
      onClick={() => {
        setCount(count + aumento)
        setLocalCount(localCount + 1)
      }}
    >
      +{aumento}
    </button>
  )
}

function BotonCopyCat({ valorPadre }) {
  const [valor, setValor] = useState(valorPadre)

  return (
    <>
      <button onClick={() => setValor(valorPadre)}>
        CopyCat: {valor}
      </button>
      <button onClick={() => setValor(valor + 1)}>
        AugCat: {valor}
      </button>
    </>
  )
}

export default App
