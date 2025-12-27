import './App.css'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [valueSubmit, setValueSubmit] = useState();

  const formSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(inputValue);
  }

  return (
    <>
    <form action="" onSubmit={formSubmit}>
      <input type="text" 
      value={inputValue}
      placeholder='Digite aqui' 
      onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Enviar</button>
  
      <p style={{color: 'darkgrey', fontFamily: "sans-serif"}}>
      O valor do input é: {valueSubmit}
    </p>

      {}
    </form>
    </>
  )
}
export default App;