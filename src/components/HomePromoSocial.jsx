import React from 'react'
import promoImage from '../img/home_promos.png'
import ticket from '../img/home_ticket_bembos.png'
import '../styles/promoSocial.css'

export const HomePromoSocial = () => {
  return (

    <div>

    <div className='contenedor__principal'>
      {/* FRANJA 3/HOME_PROMOS */}
      <div className='contenedor__promo'>
        <div className='image__promo__container'>
          <img src={promoImage} alt="#" className='image_promo' />
        </div>
        <div className='ticket__promo__container'>
          <img src={ticket} alt="" className='ticket' />
          <div className='container__letter__promo'>
            <img src={ticket} alt="" className='ticket__tablet__mobile' />
            <h2>PROMOS QUE PUEDES CANJEAR EN: <br /><span>TIENDA, CALL CENTER Y AUTOBEMBOS</span></h2>
          </div>
        </div>
      </div>

      {/* FRANJA 4/HOME_SOCIAL */}

        <div className='container__social'>
          <div className='social__bembos__details'>
            <div className='bembos__details'>
              <h1>SOCIAL <br />BEMBOS</h1>
              <p>Compartir en:</p>
          
              <a href="https://twitter.com/BembosOficial" target='_blank' className='social__link__twitter'>
                <button> <i className="fa-brands fa-twitter icon__social__home "></i> TWITTER</button>
              </a>

              <a href="https://www.facebook.com/bembos/" target='_blank' className='social__link__facebook'>
                <button> <i className="fa-brands fa-facebook icon__social__home"></i> FACEBOOK</button>
              </a>
            </div>
          </div>

          <div>
            {/* RED SOCIAL FACEBOOK */}
            <h3>AQUÍ SE COLOCARÁ EL FACEBOOK</h3>
          </div>
        </div>
      </div>

      <div className='container__footer__mobile__above'>
                  <div className='footer__icons__container'>
                      <a href="https://www.facebook.com/bembos/" target='_blank'> <i className="fa-brands fa-facebook icon__social"></i> </a>
                      <a href="https://www.youtube.com/user/BembosCanal" target='_blank'> <i className="fa-brands fa-youtube icon__social "></i>  </a>
                      <a href="https://twitter.com/BembosOficial" target='_blank'> <i className="fa-brands fa-twitter icon__social "></i> </a>
                      <a href="https://www.instagram.com/bembosoficial/?hl=es-la" target='_blank'> <i className="fa-brands fa-instagram icon__social"></i> </a>              
                  </div>
                  
                  <div className='footer__second__container'>                               
                          <div className='footer__info container__query'>

                                      {/* En esta sección este footer info es para mobile */}
                                      <div className='footer__info__tablet'>
                                          <hr/>
                                          <p className=''>MAPA DEL SITIO</p>
                                          <hr />
                                          <p className=''>TÉRMINOS Y CONDICIONES</p>
                                          <hr/>
                                      </div>                  
                          </div>

                          <div className='footer__pago'>
                              <p>FORMAS DE PAGO</p>

                              <div className='pago__metodos__container'>

                                  <div className='tarjetas__container'>
                                      <img src="./src/img/pagos_Mesa de trabajo 2.jpg" alt="" className='image__pago'/>
                                      <img src="./src/img/pagos_Mesa de trabajo 3.jpg" alt="" className='image__pago'/>
                                      <img src="./src/img/american_express_Mesa de trabajo 1.jpg" alt="" className='image__pago' />
                                  </div>

                                  <div>
                                      <img src="./src/img/new_images-01.png" alt="" className='image__pago__safety' />
                                  </div>
                              </div>

                              <button className='boton__comprobante'>
                              <i className="fa-solid fa-receipt"></i>
                              COMPROBANTES</button>

                              <div className='container__libro__reclamaciones'>
                                  <img src="./src/img/reclamaciones-02.png" alt="" className='libro__reclamaciones__img'/>
                              </div>
                          </div>                               
                          </div>
              </div>
    </div>

  )
}
