import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"
import { useTodo } from "./hooks/useTodo"

function App() {
  const { addTodo, toggleTodoCompleted, filteredTodos, clearCompleted, setFilter, filter, refresh, setRefresh } = useTodo(); //pegando os valores retornados do hook useTodo

  return (
    <TodoContainer>

    <TodoHeader></TodoHeader>
    <TodoForm addTodo={addTodo}></TodoForm>
    <TodoList 
    todoList={filteredTodos} 
    toggleTodoCompleted={toggleTodoCompleted}
    setFilter={setFilter}
    filter={filter}
    clearCompleted={clearCompleted}>
    </TodoList>

    <button className="bg-blue-500 p-2" onClick={() => setRefresh(!refresh)}>
      Recarregar lista
    </button>
    <p className="text-white">Status do refresh: {refresh.toString()}</p>

    </TodoContainer>
  )
}

export default App;