import { useEffect, useState, type FormEvent } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

async function getTodos(): Promise<Todo[]> {
  await new Promise(resolve => setTimeout(resolve, 800))

  return [
    { id: 1, text: "Aprender useEffect", completed: false },
    { id: 1, text: "Aprender React", completed: false },
    { id: 1, text: "Aprender JS", completed: true },
  ]
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {    
    const todos = await getTodos(); //simula a chamada pra api externa depois de 800ms retorna a lista de tarefas

    console.log("Dados recebidos:", todos);
    setTodoList(todos);
  };

  fetchTodos();
}, [refresh, todoList]);

  // 1 - sem array de dependências
  //useEffect(() => {
  //  console.log("Efeito executado")
  //}); //sem dependências ele executa sempre que houver atualização

  // 2 - array vazio
  // useEffect(() => {
  //   console.log("Efeito executado")
  // }, []); //com dependência vazia ele executa apenas uma vez na montagem

  // 3 - COM dependências
  // useEffect(() => {
  //    console.log("Efeito executado")
  //  }, [contador]); //se as dependências mudarem ou o componente for montado pela primeira vez, executa o useEffect

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: todoItem,
        completed: false,
      },
    ]);
    event.currentTarget.reset();

    setFilter("all"); //depois de resetar os items completados, ele vai direto para "all" onde tem todos os items
  };

  const toggleTodoCompleted = (id: number) => {
    console.log(id);

    const newTodoList = todoList.map((todo) => {
      if (id === todo.id) {
        const completed = !todo.completed;

        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });
    setTodoList(newTodoList);
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed; //ativos
    if (filter === "completed") return todo.completed; //completados
    return true;
  });

  const clearCompleted = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    addTodo,
    toggleTodoCompleted,
    filteredTodos,
    clearCompleted,
    setFilter,
    filter,
    refresh,
    setRefresh
  };
};