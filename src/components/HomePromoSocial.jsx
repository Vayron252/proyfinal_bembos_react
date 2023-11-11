import React from 'react'
import promoImage from '../img/home_promos.png'
import ticket from '../img/home_ticket_bembos.png'
import '../styles/promoSocial.css'
import american_express from '../img/american_express.jpg'
import visa from '../img/visa.jpg'
import mastercard from '../img/mastercard.jpg'
import safety_pay from '../img/safety_pay.png'
import libro_reclamaciones from '../img/libro_reclamaciones.png'
import red_social_home from '../img/red_social_home.png'

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
            <div className='container__red__social'>
              <img src={red_social_home} alt="" />
              <a href="https://www.facebook.com/bembos/" target='_blank' className=''>
                <div className='bembos__titulo__social'>
                  <h1>BEMBOS</h1>
                </div>
              </a>
              <div className='container__button__social__media'>
              <a href="https://www.facebook.com/bembos/" target='_blank' className=''>
                <div className='button__seguir__pagina'>                
                  <i class="fa-brands fa-square-facebook icono__redes__facebook"></i>
                  <button>Seguir página</button>              
                </div>
              </a>
              <a href="https://www.facebook.com/bembos/" target='_blank' className=''>
                <div className='button__compartir'>
                  <i class="fa-solid fa-share icono__redes__compartir"></i>
                  <button>Compartir</button>
                </div>
              </a>
              
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* FIN DE RED SOCIAL FACEBOOK */}

      {/* INICIO DE FOOTER CON FORMAS DE PAGO Y COMPROBANTES */}

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
                                          <hr />                                         
                                      </div>                                                                                              
                          </div>

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
                                  <img src={libro_reclamaciones} alt="" className='libro__reclamaciones__img'/>                         
                              </div>                                                              
                          </div>  

                          <div className='derechos__footer__only__mobile'>
                                <hr />
                                <p>© 2019 Todos los derechos reservados</p>
                              </div> 
                                                                   
                          </div>
              </div>

        
          {/* FINAL DE FOOTER CON FORMAS DE PAGO Y COMPROBANTES */}
    </div>

  )
}
