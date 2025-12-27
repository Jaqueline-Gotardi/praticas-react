import { useState } from "react"

const App = () => {
  const [valor, setValor] = useState("")
  const [resultado, setResultado] = useState("")

  const handleChange = (e) => {
    setValor(e.target.value)
  }

  const handleClick = () => {
    setResultado(valor)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite algo..." 
        value={valor} 
        onChange={handleChange} 
      />
      <button onClick={handleClick}>Enviar</button>

      {resultado && <p>Você digitou: {resultado}</p>}
    </div>
  )
}

export default App;