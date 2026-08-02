import { useParams } from "react-router-dom"
export const ProductDetail = () => {
    const { id } = useParams()

    return (
        <h2>Detalhes do produto</h2>
    )
}