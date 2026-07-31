import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}