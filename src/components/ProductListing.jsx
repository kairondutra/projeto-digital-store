import { products } from "../data/mockData";
import "../styles/ListingPage.css"
import { useNavigate } from "react-router-dom";

export function ProductListing() {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/produto/${productId}`);
    };

    return(
        <div className="Lista-Produtos">
            <div className="product-grid">
                {products.map((product) => (
                    <div 
                    key={product.id} 
                    className="product-card"
                    onClick = { () =>  handleProductClick(product.id) }
                    style = { {cursor: 'pointer'}}
                    >
                        <img src={product.image} alt={product.name} className="product-image" />
                        <span className="category">{product.category}</span>
                        <h3>{product.name}</h3>
                        <div className="product-prices">
                            {product.priceOld && (
                                <span className="price-old">R$ {product.priceOld.toFixed(2)}</span>
                            )}
                            <span className="price-current">R$ {product.price.toFixed(2)}</span>
                        </div>
                        <div className="discount-badge">{product.discount}% OFF</div>
                    </div>
                ))}
            </div>
        </div>  
    )
}