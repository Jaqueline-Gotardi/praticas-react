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
    <div className="min-h-screen bg-[#8690a6] ">
      <h1 className="text-4xl text-center p-5 font-bold text-[#20091b]">
        Produtos da Fake Store:
      </h1>

      <div className="bg-[#888787] p-6 text-center grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5">
        {mostrarProduto.map((produto) => (
          <div key={produto.id} className="bg-[#0002] p-3 w-sm rounded-2xl">
            <h2 className="text-[#0f0e0e] font-bold text-2xl mb-2">{produto.title}</h2>
            <span className="text-green-950 font-bold text-2xl">{produto.price}</span>
            <p className="font-sans m-2">{produto.description}</p>
            <p className="bg-[#572b5744] rounded-2xl m-2">{produto.category}</p>
            <img src={produto.image} alt={produto.title} className="w-xs m-7 bg-gray-100 rounded-3xl" />
          </div>
        ))}
        
      </div>
    </div>
  )
} 

export default App