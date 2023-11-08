import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imagen_atencion from '../img/1110x57.jpg'
import bmb_menu from '../img/bmb_menu.svg'
import bmb_promociones from '../img/bmb_promociones.svg'
import bmb_hamburguesa from '../img/bmb_hamburguesa.svg'
import bmb_beneficios from '../img/bmb_beneficios.svg'

export const Header = () => {
    const navigate = useNavigate();
    const [menuBarActive, setMenuBarActive] = useState(false);

    const handleMenuBar = () => {
        if (menuBarActive) {
            setMenuBarActive(false);
        } else {
            setMenuBarActive(true);
        }
    }

    const handleClickOptionMenu = (e, subUrl) => {
        e.preventDefault();
        handleMenuBar();
        navigate(`${subUrl}`);
    }

    return (
        <header className="header">
            <div className="header__atencion">
                <img className="atencion__imagen" src={imagen_atencion} alt="imagen atencion publico" />
            </div>
            <div className="header__barra contenedor">
                <Link to="/" className="barra__paginicio">
                    <div className="barra__logo"></div>
                </Link>
                <button className="barra__botonsincolas">
                    <p className="barra__botonsincolas__informacion">Pide en tiendas <span>SIN COLAS</span></p>
                    <i className="fa-solid fa-store"></i>
                </button>
                <div className="barra__navegar">
                    <i className="fa-solid fa-phone navegar__telefono"></i>
                    <i className="fa-solid fa-bars navegar__menu" onClick={handleMenuBar}></i>
                    <div className="navegar__ciudad">
                        <p className="ciudad__informacion"><span>Delivery</span> LIMA</p>
                        <p className="ciudad__numero">014191919</p>
                    </div>
                    <button className="navegar__ingreso">
                        <i className="fa-regular fa-user ingreso__usuario"></i>
                        <p className="ingreso__cuenta">Ingresar o crear tu cuenta</p>
                    </button>
                </div>
            </div>
            <div className="header__navegacion">
                <div className="navegacion__contenido contenedor">
                    <nav className={`navegacion__contenedor${menuBarActive ? ' active' : ''}`}>
                        <i className="fa-solid fa-xmark navegacion__cerrar" onClick={handleMenuBar}></i>
                        <ul className="contenedor__links">
                            <li className="links__opcion">
                                <a className="links__opcion__link" onClick={e => handleClickOptionMenu(e, '/menu')}>
                                    <img className="links__opcion__imagen" src={bmb_menu} alt="imagen menu" />
                                    <p className="links__opcion__texto">Menú</p>
                                </a>
                            </li>
                            <li className="links__opcion">
                                <a className="links__opcion__link" 
                                    onClick={e => handleClickOptionMenu(e, '/promociones/delivery-hamburguesas')}>
                                    <img className="links__opcion__imagen" src={bmb_promociones} alt="imagen promociones" />
                                    <p className="links__opcion__texto">Promociones</p>
                                </a>
                            </li>
                            <li className="links__opcion">
                                <a className="links__opcion__link" onClick={e => handleClickOptionMenu(e, '/menu/hamburguesas')}>
                                    <img className="links__opcion__imagen" src={bmb_hamburguesa} alt="imagen hamburguesas" />
                                    <p className="links__opcion__texto">Hamburguesas</p>
                                </a>
                            </li>
                            <li className="links__opcion">
                                <a className="links__opcion__link" onClick={e => handleClickOptionMenu(e, '/beneficios')}>
                                    <img className="links__opcion__imagen" src={bmb_beneficios} alt="imagen beneficios" />
                                    <p className="links__opcion__texto">Beneficios</p>
                                </a>
                            </li>
                        </ul>
                        <ul className="contenedor__redes">
                            <li className="redes__opcion">
                                <a className="redes__opcion__link" href="#"><i className="fa-brands fa-facebook"></i></a>
                            </li>
                            <li className="redes__opcion">
                                <a className="redes__opcion__link" href="#"><i className="fa-brands fa-youtube"></i></a>
                            </li>
                            <li className="redes__opcion">
                                <a className="redes__opcion__link" href="#"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                            <li className="redes__opcion">
                                <a className="redes__opcion__link" href="#"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                        </ul>
                    </nav>
                    <button className="navegacion__botonsincolas">
                        <i className="fa-solid fa-store"></i>
                        <p className="navegacion__botonsincolas__informacion">Pide en tiendas <span>SIN COLAS</span></p>
                    </button>
                    <button className="navegacion__shopcar">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="shopcar__items">0</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
