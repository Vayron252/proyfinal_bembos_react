import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer'>

        <div className='footer__icons__container'>
            <i class="fa-brands fa-facebook icon__social"></i>
            <i class="fa-brands fa-youtube icon__social "></i>
            <i class="fa-brands fa-twitter icon__social "></i>
            <i class="fa-brands fa-instagram icon__social"></i>
        </div>
        
        <div className='footer__second__container'>

            <div className='footer__info'>
                <ul className='footer__info-list'>
                    <li className='footer__info-item'>
                        <div className='footer__info-item-1row'>
                            <a href="" className=''>Locales</a>
                            <a href="" className=''>Nosotros</a>
                            <a href="" className=''>Atención al Cliente</a>
                            <a href="" className=''>Preguntas Frecuentes</a>
                            <a href="" className=''>Mapa de sitio</a>
                        </div>

                        <div className='footer__info-item-2row'>
                            <a href="" className=''>Políticas de Datos Personales</a>
                            <a href="" className=''>Términos y condiciones de Promociones</a>
                            <a href="" className=''>Derechos ARCO</a>
                            
                        </div>
                    </li>
                </ul>

                <img src="{imagen_logo_bembos}" alt="" className='logo__bembos__blanco'/>
            </div>  

            <div className='footer__pago'>
                <p>FORMAS DE PAGO</p>

                <div className='pago__metodos__container'>

                    <div className='tarjetas__container'>
                        <img src="./images/formas_pago/pagos_Mesa de trabajo 2.jpg" alt="" className='image__pago'/>
                        <img src="./images/formas_pago/pagos_Mesa de trabajo 3.jpg" alt="" className='image__pago'/>
                        <img src="./images/formas_pago/american_express_Mesa de trabajo 1.jpg" alt="" className='image__pago' />
                        <img src="./" alt="" />
                    </div>

                    <div>
                        <img src="./images/formas_pago/new_images-01.png" alt="" className='image__pago__safety' />
                    </div>
                </div>


                <button className='boton__comprobante'>
                <i class="fa-solid fa-receipt"></i>
                COMPROBANTES</button>
            </div> 

    

            <div className='footer__formulario'>

                <label><p>¿Quieres recibir promociones y noticias?</p></label>

                <div className='formulario__noticias'>
                    <input type="text" placeholder='Escribe tu correo'/>
                    <button>ENVIAR</button>
                </div>

                <div className='formulario__checkbox'>
                <input type="checkbox" />
                <label htmlFor="">He leído y revisado los términos y condiciones</label>
                </div>

        
                <img src="./images/libro_reclamaciones/reclamaciones-02.png" alt="" className='libro__reclamaciones__img'/>
                
            </div>

        </div>

        <div className='footer__derechos'>
            <hr />
            <p>© 2019 Todos los derechos reservados</p>
        </div>
    </footer>
  )
}
