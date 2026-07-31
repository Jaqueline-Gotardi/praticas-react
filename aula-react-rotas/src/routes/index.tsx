import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

            {/* index indica que a rota padrão quando acessamos "/" na url */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}