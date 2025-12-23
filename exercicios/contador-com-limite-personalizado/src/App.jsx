import './App.css'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(0);
  const [max, setMax] = useState(10);

  const increment = () => {
    setValue(prev => prev + 1);
  }

  const decrement = () => {
    setValue(prev => prev - 1);
  }
  
  return (
    <>
    <p>Contador com limite máximo: {value}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}
export default App



/* # Contador com Limite Personalizado

O usuário pode

- Definir um valor inicial via input
- Definir um valor máximo via input
- Aumentar/diminuir o valor com botões `-` e `+`
- Exibir uma mensagem quando o valor máximo for atingido
    - Conceitos aplicados
        - `useState`
        - Eventos (`onClick`, `onChange`)*/