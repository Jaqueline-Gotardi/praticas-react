function App() {

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form className="flex w-sm flex-col gap-0.5 bg-amber-50 p-5 shadow-md">

        <label htmlFor="produto">Nome do Produto:</label>
        <input type="text" name="produto" placeholder="Digite o nome do produto" className="border-gray-300 border-2 mb-2.5" />

        <label htmlFor="preco">Preço:</label>
        <input type="text" name="preco" placeholder="Digite o valor" className="border-gray-300 border-2 mb-2.5" />

        <label htmlFor="categoria">Categoria:</label>

        <select name="categoria" className="border-gray-300 border-2 mb-4">
          <option value="">Selecione uma categoria</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="roupas">Roupas</option>
          <option value="alimentos">Alimentos</option>
          <option value="medicamentos">Medicamentos</option>
          <option value="moveis">Móveis</option>
          <option value="livros">Livros e Ebooks</option>
        </select>

        <button type="submit" className="bg-blue-400 text-center rounded-4xl cursor-pointer">Cadastrar</button>

      </form>
    </main>
  )
}

export default App