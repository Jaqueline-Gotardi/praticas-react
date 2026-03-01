import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
]

function App() {

  return (
   <main className="bg-neutral-very-dark-blue h-screen">
    <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
    <div className="max-w-[43.75rem] m-auto p-8">
    <TodoHeader></TodoHeader>

    <TodoForm></TodoForm>

    <div className="bg-neutral-very-dark-desaturated-blue rounded-md">
      <ul>
        {
          todos.map((todo) => (
            <li className="p-6 border-b border-neutral-very-dark-grayish-blue" key={todo.id}>
              <div className="flex items-center gap-4">
                <button className="w-6 h-6 border border-neutral-very-dark-grayish-blue rounded-full"></button>
              <p className="text-neutral-very-light-grayish-blue">{todo.text}</p>
              </div>
            </li>
          ))
        }
      </ul>

      

    </div>

    </div>
    </div>
   </main>
  )
}

export default App