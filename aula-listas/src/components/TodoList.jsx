export const TodoList = () => {
    const todos = [
        {id: 1, text: "Estudar listas no React"},
        {id: 2, text: "Estudar eventos no React"},
        {id: 3, text: "Praticar React com projetos!"}
    ];
    return (
        <>
        <h1>Minhas tarefas</h1>
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        {todo.id}. {todo.text}
                        </li>
                ))
            }
        </ul>
        </>
    )
}