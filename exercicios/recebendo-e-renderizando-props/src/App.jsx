import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <Card 
      titulo="Exercício" 
      descricao="Explorando o React"/>

      <Card
      titulo="Props"
      descricao="Passando informações de pai para filho"
      />
    </>
  )
}

export default App