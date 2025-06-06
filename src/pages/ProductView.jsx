import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails"
import { products } from "../data/mockData";

function ProductView() {

    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return <>
        <ProductDetails product={product}/>
    </>;
}

export default ProductView;