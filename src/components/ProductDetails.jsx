import { products } from "../data/mockData";
import "../styles/DetailPage.css";
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductDetails({ product }) {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    
    if (!product) {
        return <div>Carregando...</div>;
    }

    const featuredProducts = products.filter(product => product.featured).slice(0, 3);

    return <>
        
        <div className="product-details">

            <div className="product-details-container">
                <div className="product-image-section">

                    <div className="breadcrumb">
                        <span><strong>Home / Produtos / {product.category} / {product.name}</strong></span>
                    </div>

                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info-section">
                    <h2>{product.name} - {product.gender}</h2>

                    <div className="product-span">
                        <span>{product.category} | {product.brand}</span>
                    </div>

                    <div className="product-title-category">
                        <span><strong>Valor:</strong></span>
                    </div>
                    
                    <div className="product-prices">
                        <span className="price-current">R$ {product.price.toFixed(2)}</span>
                        {product.priceOld && (
                            <span className="price-old">R$ {product.priceOld.toFixed(2)}</span>
                        )}
                    </div>

                    <div className="product-title-category">
                        <span><strong>Descrição do Produto:</strong></span>
                    </div>
                    <span className="product-description">
                        {product.description || "Descrição do produto não disponível."}
                    </span>

                    <div className="size-selector">
                        <div className="product-title-category">
                            <span><strong>Escolha o tamanho:</strong></span>
                        </div>
                    
                        <div className="options-row" >
                            {product.sizes.map((size, index) => (
                                <label key={index} id="option-size" className={`option ${selectedSize === size ? 'selected' : ''}` }>
                                    <input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        onChange={() => setSelectedSize(size)}
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="color-selector">
                        <div className="product-title-category">
                            <span><strong>Escolha a cor:</strong></span>
                        </div>
                        <div className="options-row">
                            {product.colors.map((color, index) => (
                                <label
                                    key={index}
                                    className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                >
                                    <input
                                        type="radio"
                                        name="color"
                                        value={color}
                                        onChange={() => setSelectedColor(color)}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>

                    <button className="add-to-cart-btn">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>


        <div className="container">
                <div className="section-header">
                    <h2>Produtos em destaque</h2>
                    <a href="/produtos" className="ver-todos">Ver todos →</a>
                </div>
                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

        </div>


    </>
}

export default ProductDetails;
