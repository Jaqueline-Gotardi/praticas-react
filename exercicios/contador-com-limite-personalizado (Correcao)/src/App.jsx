import './App.css'
import { useState } from 'react'

function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setCount(initialValue);
    setStarted(true);
  }

  const handleIncrease = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  }

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  if (!started) {
    return (
      <div style={{textAlign: "center", fontFamily: "sans-serif"}}>
        <h1>Configurar Contador</h1>

        <div>
          <label>Valor inicial: </label>
          <input type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(Number(e.target.value))}/>
        </div>

        <div>
          <label>Valor máximo: </label>
            <input type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}/>
        </div>

        <button onClick={handleStart} style={{marginTop: "10px"}}>
          Iniciar Contador
        </button>
      </div>
    )
  }

  return (
    <div style={{textAlign: "center", fontFamily: "sans-serif"}}>
      <h2>Contador: {count}</h2>
      
      <button onClick={handleDecrease} style={{marginTop: "10px"}}>-</button>
      <button onClick={handleIncrease}>+</button>

      {count === maxValue && (
        <p style={{color: "red"}}>Você atingiu o valor máximo!</p>
      )}
    </div>
  )
}

export default App;