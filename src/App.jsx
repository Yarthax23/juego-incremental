import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [wood, setWood] = useState(0)
  const [stone, setStone] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Un juego incremental</h1>
      <div>
        Wood <Botones count={wood} setCount={setWood} />
        Stone <Botones count={stone} setCount={setStone} />
      </div>
      <p className="ressources">
        wood: {wood} |
        stone: {stone}
      </p>
    </>
  )
}

function Botones({ count, setCount }) {
  const [localCount, setLocalCount] = useState(0)

  return (
    <>
      <Aumentar count={count} setCount={setCount} aumento={2} localCount={localCount} setLocalCount={setLocalCount} />
      <Aumentar count={count} setCount={setCount} aumento={5} localCount={localCount} setLocalCount={setLocalCount} />
      <Aumentar count={count} setCount={setCount} aumento={10} localCount={localCount} setLocalCount={setLocalCount} />
      Clicks: {localCount}
      <br/>
    </>
  )
}

function Aumentar({ count, setCount, aumento, localCount, setLocalCount }) {
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
