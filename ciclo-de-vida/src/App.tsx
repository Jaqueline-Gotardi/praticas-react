import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("executará o useEffect toda vez que o count mudar")
  }, [count])

  return (
    <>
    <h1>Contador: {count}</h1>
    <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>
    </>
  )
}

export default App
