import { useContext, useState } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
]

const TodoList = () => {
  const { theme } = useContext(ThemeContext);

    return (
      <>
        <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
      <ul>
        {
          todos.map((todo) => (
            <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>
              <div className="flex items-center gap-4">
                <button className={`w-6 h-6 border ${themeConfig[theme].todo.borderColor} rounded-full`}></button>
              <p className={`${themeConfig[theme].todo.textColor}`}>
                {todo.text}
                </p>
              </div>
            </li>
          ))
        }
      </ul>

      <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
        <p>{todos.length} items total</p>

        <div className="hidden sm:flex gap-4"> {/* esconder em telas menores */}
          <button className="text-bright-blue">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <button>Clear Completed</button>
      </div>

    </div>

    <div className={`flex justify-center gap-5 py-4 rounded-md mt-4 {${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} sm:hidden`}>
        <button className="text-bright-blue">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      </>
    )
}
export default TodoList;