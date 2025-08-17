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
        Wood <Botones recurso={{ value: wood, setValue: setWood }} aumentos={[0, 1, 3, 8]} />
        Stone <Botones recurso={{ value: stone, setValue: setStone }} aumentos={[1, 5, 10]} />
      </div>
      <p className="recursos">
        wood: {wood} |
        stone: {stone}
      </p>
    </>
  )
}

function Botones({ recurso, aumentos }) {
  const [localCount, setLocalCount] = useState(0)

  return (
    <>
      {aumentos.map(aumento => (
        <Aumentar
          recurso={recurso}
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

function Aumentar({ recurso, localCount, setLocalCount, aumento}) {
  const { value, setValue } = recurso

  return (
    <button
      onClick={() => {
        setValue(value + aumento)
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
