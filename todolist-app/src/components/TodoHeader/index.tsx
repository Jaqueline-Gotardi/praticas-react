import { themeConfig } from "../../contexts/theme";
//import { ThemeContext } from "../../contexts/ThemeProvider";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const TodoHeader = () => {
  const context = useContext(ThemeContext);

  const { theme, toggleTheme } = context;

  //themeConfig[theme] = podia dar erro, pq não sabemos se theme existe no themeConfig

  //theme = "light" || "dark"
  //themeConfig[theme] = configura o modo light ou dark e garante que o valor exista, pq o theme só pode ser "light" ou "dark"

    return (
    <header className="flex justify-between p-5 mb-6 items-center">
      <h1 className="text-white text-4x1 sm:text-[2.5rem] font-bold tracking-[1rem]">
        TODO
      </h1>

      <button className="cursor-pointer" onClick={toggleTheme}>
        <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alternar tema" />
      </button>

    </header>
    )
}

export default TodoHeader;