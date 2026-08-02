import { useState } from 'react'
import './App.css'
import { MostrarInicializacao } from './components/MostrarInicializacao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MostrarInicializacao mensagem='olá mundo' />
    </>
  )
}

export default App
