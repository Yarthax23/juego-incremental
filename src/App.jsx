import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [solo, setSolo] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Un juego incremental</h1>
      <div>
        <BotonSolitario count={solo} setCount={setSolo} />
        <BotonSolitario count={count} setCount={setCount} />
        <BotonCompartido count={count} setCount={setCount} />
        <BotonCopyCat valorPadre={count} />
        <BotonCopyCat valorPadre={solo} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="change-log">
        count: {count} <br/>
        solo: {solo}
      </p>
    </>
  )
}

function BotonSolitario({count, setCount}) {
  return <button onClick={() => setCount(count + 5)}>Solo: {count}</button>
}

function BotonCompartido({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Comp: {count}</button>
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
