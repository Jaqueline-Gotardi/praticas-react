import { useState } from "react";

const MyInput = () => {
    const [text, setText] = useState("");
    return (
        <>
        <input type="text" placeholder="Digite algo. . ." value={text} onChange={(event) => setText(event.target.value)}/>

        <p>Você digitou: {text}</p>

        <button onClick={() => setText("")}>Limpar</button>
        </>
    );
}

export default MyInput;