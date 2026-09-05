function App() {

  return (
    <form className="flex flex-col gap-0.5 m-auto mt-10 w-sm "> 

    <label htmlFor="nome do produto">Nome do Produto:</label>
    <input type="text" placeholder="Digite o nome do produto" className="border-gray-300 border-2 mb-2.5" />

    <label htmlFor="nome do produto">Preço:</label>
    <input type="text" placeholder="Digite o nome do produto" className="border-gray-300 border-2 mb-2.5" />

    <label htmlFor="nome do produto">Categoria:</label>
    <input type="text" placeholder="Digite o nome do produto" className="border-gray-300 border-2" />

    </form>
  )
}

export default App


//### **Objetivos do exercício**

//- Criar um formulário com campos básicos como:
  //  - Nome do produto
    //- Preço
   // - Categoria (ex.: eletrônicos, roupas, alimentos, etc.)