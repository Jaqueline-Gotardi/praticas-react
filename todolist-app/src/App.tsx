import TodoHeader from "./components/TodoHeader"

function App() {

  return (
   <main className="bg-neutral-very-dark-blue h-screen">
    <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
    <TodoHeader></TodoHeader>

    <form>
      <span></span>
      <input type="text" placeholder="Create a new todo. . ." name="todo" />
    </form>
    </div>
   </main>
  )
}

export default App