
import { useState, useEffect } from "react"
import { products, categories, collections } from "../data/mockData"
import '../styles/section.css'
import ProductCard from "./ProductCard";
import { NavLink } from "react-router-dom";

export function MainSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            title: "Queima de estoque Nike 🔥",
            subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            offer: "Oferta especial",
            image: "./images/home-slide-1.jpeg",
            cta: "Ver Ofertas"
        },
        {
            title: "Nova coleção Adidas",
            subtitle: "Descubra os últimos lançamentos da marca com tecnologia de ponta.",
            offer: "Lançamento",
            image: "./images/home-slide-2.jpeg",
            cta: "Comprar agora"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="main-slider">
            <div className="slider-container">
                <div className="slide active">
                    <div className="slide-content">
                        <span className="offer-badge">{slides[currentSlide].offer}</span>
                        <h1>{slides[currentSlide].title}</h1>
                        <p>{slides[currentSlide].subtitle}</p>
                        <button className="cta-button">{slides[currentSlide].cta}</button>
                    </div>
                    <div className="slide-image">
                        <img src={slides[currentSlide].image} alt="Produto em destaque" />
                    </div>
                </div>
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Destaques() {
    return (
        <section className="collections-section">
            <div className="container">
                <h2>Coleções em destaque</h2>
                <div className="collections-grid">
                    {collections.map((collection) => (
                        <div key={collection.id} className="collection-card">
                            <div className="collection-image">
                                <img src={collection.image} alt={collection.name} />
                                <div className="discount-badge">{collection.discount}% OFF</div>
                            </div>
                            <div className="collection-info">
                                <h3>{collection.name}</h3>
                                <button className="collection-btn">Comprar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Categorias() {
    return (
        <section className="categories-section">
            <div className="container">
                <h2>Categorias</h2>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="category-icon">{category.icon}</div>
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ProdutosDestaque() {
    const featuredProducts = products.filter(product => product.featured).slice(0, 6);
    
    const handleProductClick = (productId) => {
        navigate(`/produto/${productId}`);
    };
    
    return (
        <section className="featured-products">
            <div className="container">
                <div className="section-header">
                    <h2>Produtos em destaque</h2>
                    <NavLink to="/produtos" className="ver-todos">Ver todos →</NavLink>
                </div>
                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} 
                         onClick={() => handleProductClick(product.id)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function OfertaEspecial() {
    return (
        <section className="special-offer">
            <div className="container">
                <div className="offer-content">
                    <div className="offer-text">
                        <div className="offer-badge">Oferta especial</div>
                        <h2>Air Jordan edição de colecionador</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="offer-btn">Ver Oferta</button>
                    </div>
                    <div className="offer-image">
                        <img src="./images/product-thumb-2.jpeg" alt="Air Jordan" />
                    </div>
                </div>
            </div>
        </section>
    );
}
