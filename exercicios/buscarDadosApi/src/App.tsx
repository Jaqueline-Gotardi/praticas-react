import { useEffect, useState } from "react"

function App() {

  interface Produto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [mostrarProduto, setMostrarProduto] = useState<Produto[]>([]);
  
  useEffect(() => {
    const produtos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setMostrarProduto(data);   
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error)
    }
  }
   produtos()
}, [])

  return (
    <div className="min-h-screen bg-[#8690a6] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#20091b] mb-5">
        Produtos da Fake Store:
      </h1>

      <div className="bg-[#888787] p-4 text-center ">
        {mostrarProduto.map((produto) => (
          <div key={produto.id}>
            <h2 className="text-[#0f0e0e] text-2xl">{produto.title}</h2>
            <span>{produto.price}</span>
            <p>{produto.description}</p>
            <p>{produto.category}</p>
            <img src={produto.image} alt={produto.title} />
          </div>
        ))}
        
      </div>
    </div>
  )
} 

export default App