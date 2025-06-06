import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Layout from "./Layout";
import Produtos from "./pages/ProductListing";
import Produto from "./pages/ProductView";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="produtos" element={<Produtos />} />
                <Route path="produto/:id" element={<Produto />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </HashRouter>
  );
}

