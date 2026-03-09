import { useState, type FormEvent } from "react"
import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [ todoList, setTodoList ] = useState<Todo[]>([]);
  const [ filter, setFilter ] = useState <"all" | "active" | "completed"> ("all");


  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string

    //console.log(todoItem)

    if(!todoItem.trim()) return

    setTodoList(prev => [...prev,{
      id: Date.now(),
      text: todoItem,
      completed: false
    }])
    event.currentTarget.reset();
  }
  
  const toggleTodoCompleted = (id: number) => {
    console.log(id);

    const newTodoList = todoList.map(todo => {
      if(id === todo.id) {

        const completed = !todo.completed;

        return {
          ...todo,
          completed,
        }
      }

      return todo;
    })
    setTodoList(newTodoList);
  }

  const filteredTodos = todoList.filter(todo => {
    if(filter === "active" ) return !todo.completed //ativos
    if(filter === "completed" ) return todo.completed //completados
    return true
  })

  const clearCompleted = () => {
    setTodoList((prev )=> prev.filter(todo => !todo.completed))
  }

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

    </TodoContainer>
  )
}

export default App;