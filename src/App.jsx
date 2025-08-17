import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Un juego incremental</h1>
      <div className="card">
        <UnBoton />
        <BotonCompartido count={count} setCount={setCount} />
        <BotonCopyCat valorPadre={count} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="change-log">
        Componente UnBoton {count}
      </p>
    </>
  )
}

function UnBoton  () {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 5)}>Boton: {count}</button>
}

function BotonCompartido({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Compartido: {count}</button>
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
