//EXEMPLO COM PROPS CHILDREN

//import { Children } from "react";
import './Card.css';

const Card = ({children}) => {
    return (
        <div className="card">
            {children || <p>Nenhum conteúdo disponível</p>}
        </div>
    )
}

export default Card;