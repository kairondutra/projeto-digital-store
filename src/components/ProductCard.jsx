import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <NavLink 
            to={`/produto/${product.id}`} 
        >
            <div className="product-card">
                {product.discount > 0 && (
                    <div className="discount-badge">{product.discount}% OFF</div>
                )}
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                    <span className="category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="product-prices">
                        {product.priceOld && (
                            <span className="price-old">R$ {product.priceOld.toFixed(2)}</span>
                        )}
                        <span className="price-current">R$ {product.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;