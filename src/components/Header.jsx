import { useState } from 'react'
import imagen_atencion from '../img/1110x57.jpg'

export const Header = () => {
    const [menuBarActive, setMenuBarActive] = useState(false);

    const handleMenuBar = () => {
        if (menuBarActive) {
            setMenuBarActive(false);
        } else {
            setMenuBarActive(true);
        }
    }

    return (
        <>
            <header className="header">
                <div className="header__atencion">
                    <img src={imagen_atencion} alt="imagen atencion publico" />
                </div>
                <div className="header__barra">
                    <div className="barra__logo"></div>
                    <button className="barra__sin__colas boton">
                        <i className="fa-solid fa-store"></i>
                        <p>Pide en tienda <span>SIN COLAS</span></p>
                    </button>
                    <div className='barra__navegacion'>
                        <button><i className="fa-solid fa-phone"></i></button>
                        {/* <div className="barra__informacion">
                            <span>Delivery</span> Lima
                            <p>014191919</p>
                        </div> */}
                        <button
                            onClick={handleMenuBar}><i className="fa-solid fa-bars"></i></button>
                        <button>
                            <i className="fa-regular fa-user"></i>
                            <p className="">Ingresar o crear tu cuenta</p>
                        </button>
                    </div>
                </div>
            </header>
            <nav className="header__navegacion contenedor">
                {/* <button className="navegacion__cerrarbar"><i className="fa-solid fa-xmark"></i></button> */}
                <ul className={`navegacion__menu ${menuBarActive?'active':''}`}>
                    <li><a href="#">Menú</a></li>
                    <li><a href="#">Beneficio</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Locales</a></li>
                    <li><a href="#">Zonas de Reparto</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
                <button className="navegacion__sin__colas boton">
                    <i className="fa-solid fa-store"></i>
                    <p>Pide en tienda <span>SIN COLAS</span></p>
                </button>
                <button className="navegacion__shopcar boton"><i className="fa-solid fa-cart-shopping"></i></button>
            </nav>
        </>
    )
}
