import './App.css'
import { useState } from 'react'

function App() {
  const [initialValue, setinitialValue] = useState(0);
  const [valueMax, setvalueMax] = useState(10);

  const increment = () => {
    if  (initialValue < valueMax) {
      setinitialValue(prev => prev + 1); 
      }  else {
        alert("Valor máximo atingido!");
      }
    }
  const decrement = () => {
    if (initialValue > valueMax * -1) {
    setinitialValue(prev => prev - 1);
    } else {
      alert("Valor mínimo atingido!")
    }
}

  return (
    <>
    <h3>Contador com limite: {valueMax}</h3>
    <p>Valor atual: {initialValue}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <br />
    <input 
    type="number"
    value={initialValue} 
    onChange={(e) => {setvalueMax(e.target.value)}}
    
     />
    </>
  )
}
export default App