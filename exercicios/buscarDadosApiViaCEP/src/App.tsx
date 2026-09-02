import './globals.css'
function App() {

  interface CepData {
    cep: string
    logradouro: string
    bairro: string
    cidade: string
    estado: string
    ddd: string
  }

  return (
    <form>
      <h1>Sistema do Usuário</h1>

      <div>
        <label>Informe seu CEP:</label>
        <input type='number' placeholder='digite seu CEP' />
      </div>

      <button>Acessar dados</button>

      <div>
        <p>CEP:</p>
        <p>Logradouro:</p>
        <p>Bairro:</p>
        <p>Cidade:</p>
        <p>Estado:</p>
        <p>DDD:</p>
      </div>
    </form>
  )
}

export default App