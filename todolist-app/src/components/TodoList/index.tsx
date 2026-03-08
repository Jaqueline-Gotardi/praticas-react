import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
//import { ThemeContext } from "../../contexts/ThemeProvider";
import { ThemeContext } from "../../contexts/ThemeContext";
//import type { Todo } from "../../App";

/* const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
] */

 interface TodoListProps {
    todoList: Todo[];
  }

const TodoList = ({todoList}: TodoListProps) => {
  const { theme } = useContext(ThemeContext);

    return (
      <>
        <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
      <ul>
        { 
        todoList.map((todo) => (
            <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>

              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px[1px]">
                <button className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}`}></button>
                </span>
              <p className={`${themeConfig[theme].todo.textColor}`}>
                {todo.text}
                </p>
              </div>
            </li>
          ))
        }
      </ul>


      {/* renderiza o "rodapé" apenas de houver itens na lista */}
      { todoList.length > 0 && (
      <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
        <p>{todoList.length} items total</p>

        <div className="hidden sm:flex gap-4"> {/* esconder em telas menores */}
          <button className={`text-bright-blue cursor-pointer ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>All</button>
          <button className={`cursor-pointer 
        ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>Active</button>
          <button className={`cursor-pointer 
        ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>Completed</button>
        </div>

        <button className={`cursor-pointer 
        ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>Clear Completed</button>
      </div>
      )}
    </div>

    {/* renderização do "rodapé" para telas menores, apenas se houver itens na lista */}
    { todoList.length > 0 && (
    <div className={`flex justify-center gap-5 py-4 rounded-md mt-4 {${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} sm:hidden`}>
        <button className={`text-bright-blue cursor-pointer ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>All</button>
        <button className={`cursor-pointer 
        ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>Active</button>
        <button className={`cursor-pointer ${theme === "dark" 
        ? "hover:text-neutral-light-grayish-blue-hover" 
        : "hover:text-neutral-very-dark-grayish-blue" 
        }`}>Completed</button>
      </div>
      )}

      </>
    )
}
export default TodoList;