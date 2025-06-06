import logoFooter from '../assets/logo-footer.svg';
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import { Divider } from 'primereact/divider';
import { NavLink } from 'react-router-dom';
import "../styles/Footer.css"

function Footer() {
    return <>
        <div className='Footer'>
            <div className='Footer-aux'>
                <div className="Loja">
                    <NavLink to={"/"}><img src={logoFooter} alt="Logo do rodapé" /></NavLink>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti a, obcaecati aperiam voluptatem nisi.</p>
                    <img src={instagram} alt="Logo do instagram" />
                    <img src={facebook} alt="Logo do facebook" />
                    <img src={twitter} alt="Logo do twitter" />
                </div>
                <div className='Info'>
                    <p>Informações</p>
                    <ul>
                        <li>Sobre Digital Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>
                <div className='CategoriasProdutos'>
                    <p>Produtos</p>
                    <ul>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>
                <div className='Contato'>
                    <p>Contato</p>
                    <ul>
                        <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                        <li>(85) 3051-3411</li>
                    </ul>
                </div>
            </div>
            <Divider />
            <div className='FinalFooter'>
                © 2025 Digital College
            </div>
        </div>
    </>
    ;
}

export default Footer;
