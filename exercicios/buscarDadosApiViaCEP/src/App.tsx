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
      setCepData(null)
      return null
    } else {

      const data = await response.json()

      if (data.erro) {
        setErroCep('CEP não encontrado!')
        setCepData(null)
        return null
      } else {
        setErroCep(null)
        return data as CepData
      }   
    } 
  } 

  function validarCep(cepInput: string): boolean {

    if (cepInput.length === 8 && /^[0-9]+$/.test(cepInput)) {
      setErroCep(null)
      return true
  }
  return false
}

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cepInput = (event.currentTarget.elements.namedItem('cep') as HTMLInputElement).value

    if (!validarCep(cepInput)) {
      setErroCep('CEP inválido! Digite um CEP válido com 8 dígitos numéricos.')
      return
    }
    
      fetchCepData(cepInput).then((data) => {
        if (data) {
        setCepData(data)
      } else {
        setCepData(null)
      }
    }) 
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const cepInput = event.currentTarget.value 

    fetchCepData(cepInput)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>Sistema do Usuário</h1>

      {erroCep && <p>{erroCep}</p>}
      <div className='input-container'>
        <label htmlFor='cep'>Informe seu CEP:</label>
        <input name= 'cep' id='cep' placeholder='digite seu CEP' onBlur={handleBlur} />
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