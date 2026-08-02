import { useState, useEffect } from 'react'
import './App.css'

function Contador() {
  // useEffect(() => {
  //   console.log("executará o useEffect toda vez que o count mudar")
  // }, [count])

  useEffect(() => {
    //criamos um intervalo que será executado a cada 1 segundo
    const interval = setInterval(() => {
      console.log('Intervalo rodando...')
    }, 1000)

    return () => {
      console.log("Limpando o intervalo antes de desmontar o componente");
      clearInterval(interval)
    }
  },[])

  return (
    <h2>Sou o componente de contador</h2>
  )
}

function App() {
  const [ mostrar, setMostrar ] = useState(true) 

  return (
    <>
    {/* <h1>Contador: {count}</h1> */}
    {/* <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button> */}
    <button onClick={() => setMostrar(prev => !prev)}>{mostrar ? 'Remover contador' : 'Mostrar contador'}</button>

    {mostrar && <Contador />}
    </>
  )
}

export default App
