import './App.css'
function App() {
 
  const handleClick = () => {
    alert('Clicou no botão!')
  }

  const handleKeyPress = (event) => {
    console.log('a tecla pressionada foi:', event.key)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário foi enviado!');
  }

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      {/* <button onClick={handleClick}>
        Clique aqui
      </button> */}

      {/* <button onDoubleClick={handleClick}>
        Clique aqui
      </button> */}

      {/* <input type="text" onKeyDown={handleKeyPress}/> */}

      {/* <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite algo. . .'/>
        <button type='submit'>Enviar</button>
      </form> */}

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite algo. . .' onChange={handleChange}/>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App;