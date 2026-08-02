import './Products.css'
import { Link } from 'react-router-dom'
import type { Product } from '../../../mocks/products'

interface ProductProps {
    products: Product[]
}

export const Products = ({ products }: ProductProps) => {
    <section className='products-container'>
        <h2>Nossos Produtos</h2>

        <div className='products-grid'>
            {products.map((product) => (
                <Link 
                to={`/product/${product.id}`}
                key={product.id}
                className="product-card"
                >

                <img src={product.image} alt={product.name} />

                <div className='product-info'>
                    <h3>{product.name}</h3>
                    <p className='product-price'>
                        R$ {product.price},00
                    </p>
                    <button type='button'>Adicionar ao carrinho</button>
                </div>
                </Link>
            ))}
        </div>
    </section>
}