import { useParams } from "react-router-dom"
import { products } from "../../../mocks/products"

export const ProductDetail = () => {
    const { id } = useParams()

    const productDetail = products.find(product => product.id === Number(id));

    return (
        <>
        <h2>Detalhes do produto</h2>

        <div>
            <img src={productDetail?.image} alt={productDetail?.name} />

            <p>{productDetail?.name}</p>
            <p>R${productDetail?.price},00</p>
        </div>
        </>
    );
};