import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Products } from "../components/pages/Products";
import { products } from "../mocks/products"
import { ProductDetail } from "../components/pages/ProductDetail";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

            {/* index indica que a rota padrão quando acessamos "/" na url */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products products={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
        </Routes>
    )
}