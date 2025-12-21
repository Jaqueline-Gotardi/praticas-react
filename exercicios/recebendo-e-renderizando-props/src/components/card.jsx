/* Crie um componente chamado **Card** que recebe as seguintes **props**:

- `titulo` (string)
- `descricao` (string)

Esse componente deve **renderizar** essas informações na tela dentro de uma `<div>` estilizada (pode ser só borda e espaçamento).

Depois, use esse componente no **App.jsx** passando valores diferentes para as props.

👉 O objetivo é entender como **passar informações do componente pai para o componente filho** usando props/*  */

const Card = ({ titulo, descricao }) => {
    return (
        <div style={{border: "1px solid #ccc", padding: "10px", margin: "10px", backgroundColor: "rebeccapurple"}}>
        <h1>{titulo}</h1>
        <span>{descricao}</span>
        </div>
    )
};

export default Card;