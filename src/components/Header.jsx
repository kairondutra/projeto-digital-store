import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import MenuBar from "./MenuBar";
import LogoHeader from "../assets/logo-header.svg"
import Carrinho from "../assets/mini-cart.svg"

const Header = () => {
    return (
        <div className="Header-geral">
            <div className="Header-container">
                <div className="Header-img">
                    <NavLink to="/"><img src={LogoHeader} /></NavLink>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Pesquisar Produto..."/>
                    <i className="pi pi-search"></i>
                </div>
                <div className="Header-account">
                    <div className="Header-cadastro">
                        <NavLink to={"/Cadastro"}>Cadastre-se</NavLink>
                    </div>
                    <div className="Header-Login">
                        <NavLink to={"/Entrar"}><button>Entrar</button></NavLink>
                    </div>
                    <div className="Header-car">
                        <NavLink to={"/Carrinho"}><img src={Carrinho} /></NavLink>
                    </div>
                </div>
            </div>

            <div className="Menu-container">
                <MenuBar/>
            </div>

        </div>
   )
}

export default Header;


/*

<nav>
                    <ul>
                        <li><NavLink to={"/"}><img src={LogoHeader} /></NavLink></li>
                        <li>
                            <div className="search-container">
                                <input type="text" placeholder="Pesquisar Produto..."/>
                                <i className="pi pi-search"></i>
                            </div>
                        </li>
                        <li><NavLink to={"/Cadastro"}>Cadastre-se</NavLink></li>
                        <li><NavLink to={"/Entrar"}><button>Entrar</button></NavLink></li>
                        <li><NavLink to={"/Carrinho"}><img src={Carrinho} /></NavLink></li>
                    </ul>
                </nav>


*/