import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                       <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/products">Produtos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}