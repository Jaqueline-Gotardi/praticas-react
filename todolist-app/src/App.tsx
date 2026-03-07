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

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string

    console.log(todoItem)

    if(!todoItem.trim()) return

    setTodoList(prev => [...prev,{
      id: Date.now(),
      text: todoItem,
      completed: false
    }])
  }

  return (
    <TodoContainer>

    <TodoHeader></TodoHeader>
    <TodoForm addTodo={addTodo}></TodoForm>
    <TodoList></TodoList>

    </TodoContainer>
  )
}

export default App;