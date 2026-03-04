import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
//import { ThemeContext } from "../../contexts/ThemeProvider";
import { ThemeContext } from "../../contexts/ThemeContext";

const TodoForm = () => {
  const { theme } = useContext(ThemeContext);

    return (
        <form className="relative mb-10">
      <span className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform -translate-y-1/2 rounded-full left-6`}></span>
      
      <input type="text" placeholder="Create a new todo. . ." name="todo" className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg`} />

    </form>
    )
}
export default TodoForm;