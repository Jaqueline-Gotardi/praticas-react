import './App.css'
import { useState } from 'react'

function App() {
  const [initialValue, setinitialValue] = useState(0);
  const [valueMax, setvalueMax] = useState(10);

  const increment = () => {
    if  (initialValue < valueMax) {
      setinitialValue(prev => prev + 1); 
      }  
    }
  const decrement = () => {
    if (initialValue > valueMax * -1) {
    setinitialValue(prev => prev - 1);
    } 
}

  return (
    <div style={{backgroundColor: "orange"}}>
    <h3>Contador com limite: {valueMax}</h3>
    <p>Valor atual: {initialValue}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    {initialValue >= valueMax && (
      <p style={{color: "red", fontWeight: "bold"}}>
        Atenção: Você atingiu o limite máximo de {valueMax}
      </p>
    )}

    {initialValue <= valueMax * -1 && (
      <p style={{color: "blue", fontWeight: "bold"}}>
        Atenção: Você atingiu o limite mínimo de {valueMax * -1}!
      </p>
    )}


    <br />
    <input 
    type="number"
    value={initialValue} 
    onChange={(e) => {setvalueMax(Number(e.target.value))}}
    
     />
    </div>
  )
}
export default App;