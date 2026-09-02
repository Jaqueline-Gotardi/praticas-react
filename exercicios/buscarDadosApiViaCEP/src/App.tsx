import './globals.css'
import { useState } from 'react'
function App() {

  interface CepData {
    cep: string
    logradouro: string
    bairro: string
    cidade: string
    estado: string
    ddd: string
  }

  const [cepData, setCepData] = useState<CepData | null>(null)
  const [erroCep, setErroCep] = useState<string | null>(null)

  return (
    <form className='form'>
      <h1 className='title'>Sistema do Usuário</h1>

      {erroCep && <p>{erroCep}</p>}
      <div className='input-container'>
        <label>Informe seu CEP:</label>
        <input type='number' placeholder='digite seu CEP' />
      </div>

      <button>Acessar dados</button>

      {cepData && (
        <div>
        <p>CEP: {cepData.cep}</p>
        <p>Logradouro: {cepData.logradouro}</p>
        <p>Bairro: {cepData.bairro}</p>
        <p>Cidade: {cepData.cidade}</p>
        <p>Estado: {cepData.estado}</p>
        <p>DDD: {cepData.ddd}</p>
      </div>
      )}
    </form>
  )
}

export default App