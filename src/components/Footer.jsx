import { Link } from 'react-router-dom'
import libro_reclamaciones from '../img/libro_reclamaciones.png'
import logo_bembos from '../img/logo_bembos.png'
import american_express from '../img/american_express.jpg'
import visa from '../img/visa.jpg'
import mastercard from '../img/mastercard.jpg'
import safety_pay from '../img/safety_pay.png'


export const Footer = () => {
    return (

        <footer className='footer'>
            <div className='container'>
                <div className='footer__icons__container'>
                    <a href="https://www.facebook.com/bembos/" target='_blank'> <i className="fa-brands fa-facebook icon__social"></i> </a>
                    <a href="https://www.youtube.com/user/BembosCanal" target='_blank'> <i className="fa-brands fa-youtube icon__social "></i>  </a>
                    <a href="https://twitter.com/BembosOficial" target='_blank'> <i className="fa-brands fa-twitter icon__social "></i> </a>
                    <a href="https://www.instagram.com/bembosoficial/?hl=es-la" target='_blank'> <i className="fa-brands fa-instagram icon__social"></i></a>
                </div>

                <div className='footer__second__container'>
                    <div className='footer__info container__ocultar'>

                        <ul className='footer__info-list'>
                            <li className='footer__info-item'>
                                <div className='footer__info-item-1row'>
                                    <a href="" className=''>Locales</a>
                                    <Link to={'/nosotros/como-nacio-bembos'}>
                                    <a href="" className=''>Nosotros</a>
                                    </Link>
                                    <a href="" className=''>Atención al Cliente</a>
                                    <a href="" className=''>Preguntas Frecuentes</a>
                                    <a href="" className=''>Mapa de sitio</a>
                                </div>

                                <div className='footer__info-item-2row'>
                                    <a href="" className=''>Políticas de Datos Personales</a>
                                    <Link to={'/terminos-y-condiciones-de-promociones'}>
                                    <a href="" className=''>Términos y condiciones de Promociones</a>
                                    </Link>
                                    <a href="" className=''>Derechos ARCO</a>

                                </div>
                            </li>
                        </ul>

                        <div className='container__bembos__blanco'>
                            <img src={logo_bembos} alt="logo_bembos" className='logo__bembos__blanco' />
                        </div>

                    </div>


                    {/* CONTAINER QUERY - tablet*/}

                    <div className='footer__info container__query'>
                        <div className='footer__info__tablet'>
                            <hr />
                            <p className=''>MAPA DEL SITIO</p>
                            <hr />
                            <p className=''>TÉRMINOS Y CONDICIONES</p>
                            <hr />
                        </div>
                    </div>

                    {/* Final de container tablet   */}

                    <div className='footer__pago'>
                        <p>FORMAS DE PAGO</p>

                        <div className='pago__metodos__container'>

                            <div className='tarjetas__container'>
                                <img src={visa} alt="" className='image__pago' />
                                <img src={mastercard} alt="" className='image__pago' />
                                <img src={american_express} alt="" className='image__pago' />
                            </div>

                            <div>
                                <img src={safety_pay} alt="" className='image__pago__safety' />
                            </div>
                        </div>

                        <button className='boton__comprobante'>
                            <i className="fa-solid fa-receipt"></i>
                            COMPROBANTES</button>

                        <div className='container__libro__reclamaciones'>
                            <img src={libro_reclamaciones} alt="imagen reclamaciones" className='libro__reclamaciones__img' />
                        </div>

                    </div>

                    <div className='footer__formulario'>

                        <div className='container__ocultar'>
                            <label><p>¿Quieres recibir promociones y noticias?</p></label>

                            <div className='formulario__noticias'>
                                <input type="text" placeholder='Escribe tu correo' />
                                <button>ENVIAR</button>
                            </div>
                        </div>

                        <div className='formulario__checkbox container__ocultar' >
                            <input type="checkbox" />
                            <label htmlFor="">He leído y revisado los<u>términos y condiciones</u> </label>
                        </div>

                        <img src={libro_reclamaciones} alt="" className='libro__reclamaciones__img' />
                    </div>
                </div>
            </div>
            <div className='footer__derechos'>
                <hr />
                <p>© 2019 Todos los derechos reservados</p>
            </div>

            {/* FOOTER SOLO MOBILE */}
            
            <div className='footer__mobile'>
                <div className='footer__mobile__contenedor'>

                    <Link className='icon__footer__mobile' to="/menu">
                        <i className="fa-solid fa-burger"></i>
                        <h4>MENU</h4>
                    </Link>

                    <div className='icon__footer__mobile'>
                        <i className="fa-solid fa-heart"></i>
                        <h4>FAVORITOS</h4>
                    </div>

                    <div className='icon__footer__mobile'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h4>CARRITO</h4>
                    </div>

                    <div className='icon__footer__mobile'>
                        <i className="fa-solid fa-user"></i>
                        <h4>MI CUENTA</h4>
                    </div>

                </div>
            </div>

            {/* FINAL FOOTER MOBILE */}

        </footer>
    )
}
