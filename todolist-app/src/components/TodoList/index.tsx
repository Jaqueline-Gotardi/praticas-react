const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
]

const TodoList = () => {

    return (
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

      <div className="flex justify-between p-4 text-neutral-very-linght-grayish-blue">
        <p>{todos.length} items total</p>

        <div className="flex gap-4">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <button>Clear Selected</button>
      </div>

    </div>
    )
}
export default TodoList;