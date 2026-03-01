import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"

function App() {

  return (
   <main className="bg-neutral-very-dark-blue h-screen">
    <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
    <div className="max-w-[43.75rem] m-auto p-2">
    <TodoHeader></TodoHeader>

    <TodoForm></TodoForm>
    </div>
    </div>
   </main>
  )
}

export default App