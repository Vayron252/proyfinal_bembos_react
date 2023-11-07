import React from 'react'
import promoImage from '../img/home_promos.png'
import ticket from '../img/home_ticket_bembos.png'
import '../styles/promoSocial.css'

export const HomePromoSocial = () => {
  return (
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
  )
}
