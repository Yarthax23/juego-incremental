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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <UnBoton />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="change-log">
        Componente UnBoton
      </p>
    </>
  )
}

function UnBoton() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 5)}>Hazme Click {count}</button>
}

export default App
