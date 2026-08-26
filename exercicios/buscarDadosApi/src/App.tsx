import { useEffect, useState } from "react"

function App() {

  const [mostrarProduto, setMostrarProduto] = useState();
  
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
    <div className="min-h-screen bg-[#8690a6] flex items-center justify-center">
      <h1 className="text-4xl font-bold text-[#20091b]">
        Busque dados aleatórios!
      </h1>

      <div>
        
      </div>
    </div>
  )
} 

export default App