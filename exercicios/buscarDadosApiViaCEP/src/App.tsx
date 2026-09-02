import './globals.css'
import { useState } from 'react'
function App() {

  interface CepData {
    cep: string
    logradouro: string
    bairro: string
    localidade: string
    uf: string
    ddd: string
  }

  const [cepData, setCepData] = useState<CepData | null>(null)
  const [erroCep, setErroCep] = useState<string | null>(null)

  async function fetchCepData(cep: string): Promise<CepData | null> {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if (!response.ok) {
      setErroCep('Erro ao buscar dados do CEP')
    } else {
      const data = await response.json()

      if (data.erro) {
        setErroCep('CEP não encontrado!')
      } else {
        setErroCep(null)
        return data as CepData
      } 
    } 
  } 

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>Sistema do Usuário</h1>

      {erroCep && <p>{erroCep}</p>}
      <div className='input-container'>
        <label htmlFor='cep'>Informe seu CEP:</label>
        <input id='cep' placeholder='digite seu CEP' />
      </div>

      <button type='submit'>Acessar dados</button>

      {cepData && (
        <div className='cep-data'>
        <p>CEP: {cepData.cep}</p>
        <p>Logradouro: {cepData.logradouro}</p>
        <p>Bairro: {cepData.bairro}</p>
        <p>Cidade: {cepData.localidade}</p>
        <p>Estado: {cepData.uf}</p>
        <p>DDD: {cepData.ddd}</p>
      </div>
      )}
    </form>
  )
}

export default App