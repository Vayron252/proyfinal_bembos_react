import { useLoaderData, Link } from 'react-router-dom';
import '../styles/promociones.css'
import Slider from "react-slick"
import { useScrollPosition } from '../hooks/useScrollPosition'
import { PromocionesTarjetas } from '../components/PromocionesTarjetas'
import { PromocionesPersonales } from '../components/PromocionesPersonales'
import { Cupones } from '../components/Cupones'
import { PromocionesParaCompartir } from '../components/PromocionesParaCompartir'
import { PromocionesParaDos} from '../components/PromocionesParaDos'
import { useState } from 'react';
import { obtenerListadoProductosXOpcion } from '../data/bembosAPI';
import { obtenerPromocionesParaDos } from '../data/bembosAPI';
import { obtenerPromocionesPersonales } from '../data/bembosAPI';
import { obtenerCupones } from '../data/bembosAPI';
import { obtenerPromocionesParaCompartir } from '../data/bembosAPI';


export const loader = async () => {
  const listadoComplementos = await obtenerListadoProductosXOpcion('complementos')
  const promocionesPersonalesActualizado = await obtenerPromocionesPersonales('')
  const promocionesParaCompartir = await obtenerPromocionesParaCompartir('')
  const promocionesParaDos = await obtenerPromocionesParaDos('')
  const cupones = await obtenerCupones('')
  return {listadoComplementos, promocionesPersonalesActualizado, promocionesParaCompartir, promocionesParaDos, cupones};
}

export const Promociones = () => {

  const { listadoComplementos, promocionesPersonalesActualizado, promocionesParaDos, cupones, promocionesParaCompartir} = useLoaderData();
  // console.log(listadoComplementos)
  // console.log(promocionesPersonalesActualizado)
  // console.log(cupones)
  // console.log(promocionesParaCompartir)
  
/* SLIDER DEL MENU */
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

/* SLIDER DE COMPLEMENTOS */
  const settingsCards = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    swipeToSlide: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          variableWidth: true,     
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false, 
        },
      },
    ],

    style: {
      margin: '0 20px',
      columnGap: '-30px',
      position: 'relative',
    },
  };

  /* SLIDER DEL PROMO PERSONAL, PARA DOS, COMPARTIR Y CUPONES*/

  const settingsAll = {
    speed: 500,
    infinite: false,
    slidesToShow: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    rows: 2,
  };

  const settingsResponsive = [
    {
      breakpoint: 992,
      settings: {
      slidesToShow: 1,
      rows: 1,
      vertical: true,
      verticalSwiping: true,
      nextArrow: <Arrow vertical />,
      prevArrow: <Arrow vertical />,
      },
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      rows: 1,
      vertical: true,
      verticalSwiping: true,
      nextArrow: <Arrow vertical />, 
      prevArrow: <Arrow vertical />,
      },
    },
  ];


  function Arrow(props) {
    const { className, style, onClick, vertical } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#173083", transform: vertical ? 'rotate(90deg)' : 'none'}}
        onClick={onClick}
      />
    );
  }

  return (


      <div className='container__todo__pagina__promociones'>

                  <div className='contenedor__total__promociones'>
                    <div className='contenedor__promociones__seleccion'>
                      <button> <a href="#personal">Promociones Personales</a></button>
                      <button> <a href="#dos">Promociones para 2</a></button>
                      <button><a href='#compartir'>Promociones para compartir</a></button>
                      <button><a href='#cupones'>Cupones</a></button>
                    </div>
                  </div>

        <div className='container__details__promociones'>



          {/* SLIDER PARA MOBILE */}

          {/* SEGUNDA FRANJA - PROMOCIÓN AVISO Y BUSCAR */}

          <div className='contenedor__total__promo__buscar container__ocultar__promo__buscar'>
          
            <div className='div__invisible'>

            </div>
            <div className='contenedor__texto__promocion__especial'>
              <p className='texto__solo__computadora'>¡Por cada promo online, llévate 2 papas <br/> medianas a S/5.90!</p>
              <p className='texto__solo__mobile'>¡Por cada promo online, llévate 2 papas medianas a S/5.90!</p>
            </div>
      
            <div className='contenedor__total__buscar__producto'>
              <div className='contenedor__buscar__producto'>
                <input type="text" placeholder='Buscar tu producto'/>
                <i className="fa-solid fa-magnifying-glass icono__buscar"></i>
              </div>
            </div>
    
          </div>
          <hr className='separador__promociones__hamburguesas' />     
          
        
          <div className='contenedor__menu__promociones__mobile'>
          <Slider {...settings}>

              <div className='contenedor__button__menu__mobile'>
                <button>Promociones Personales</button>
              </div>
              <div className='contenedor__button__menu__mobile'>
                <button><a href="#dos">Promociones para 2</a></button>
              </div>
              <div className='contenedor__button__menu__mobile'>
                <button>Promociones para compartir</button>
              </div>
              <div className='contenedor__button__menu__mobile'>
                <button>Cupones</button>
              </div>
          </Slider>
          <hr className='separador__encabezado__mobile'/>     
          </div> 

          {/* PROMOCIÓN-AVISO Y BUSCAR (SOLO TABLET) */}
        
          <div className='container__solo__tablet'>
            <div></div>
          <div className='contenedor__total__promo__buscar'>
            <div className='contenedor__texto__promocion__especial'>
              <p className='texto__solo__computadora texto__solo__tablet'>¡Por cada promo online, llévate 2 papas medianas a S/5.90!</p>
            </div>
            <div className='contenedor__total__buscar__producto container__buscar__producto__tablet'>
              <div className='contenedor__buscar__producto '>
                <input type="text" placeholder='Buscar tu producto'/>
                <i className="fa-solid fa-magnifying-glass icono__buscar"></i>
              </div>
            </div>
          </div>   
          </div>  
          <hr className='separador__solo__tablet'/> 
          {/* FIN -PROMOCIÓN-AVISO Y BUSCAR (SOLO TABLET) */}

          <div className='promociones__categoria__total'>
            <div className='contenedor__promociones__categorias'>

                <div className='titulo__promociones__lista'>
                  <h1>PROMOCIONES DE HAMBURGUESAS PARA TI CON DELIVERY</h1> 
                  <hr className='separador__promociones__categorias'/>            
                </div>
                 
                <div className='contenedor__promocion__categoria' id='personal'>
                  <i className="fa-solid fa-user"></i>
                  <h3>Promociones Personales</h3>                
                </div>

                <div className='promociones__personales__contenedor'>
                  <Slider {...settingsAll} responsive={settingsResponsive} className='slider__contenedor'>
                      {promocionesPersonalesActualizado.map((personal, index) => (
                        <PromocionesPersonales key={index} personalPromo = {personal}/>
                      ))}
                  </Slider>
                </div>    

                  <div>

                  <h1>Complementos</h1>
                  {/* COMPLEMENTOS - PROMOCIONES PERSONALES */}                            
                    <div className='menu__container__complementos'>
                    <Slider {...settingsCards}>
                    {listadoComplementos.map((complemento, index) => (
                    <PromocionesTarjetas key = {index} complementoPromo = {complemento} />
                    ))}
                    </Slider>  
                    </div>
                  {/* FIN COMPLEMENTOS - PROMOCIONES PERSONALES */}
                                        
                </div>

                <div className='contenedor__promocion__categoria' id='dos'>
                  <i className="fa-solid fa-user-group"></i>
                  <h3>Promociones para dos</h3>
                </div>

                {/* PROMO PARA DOS */}
                <div className='promociones__dos__contenedor' responsive={settingsResponsive}>
                  <Slider {...settingsAll} responsive={settingsResponsive} className='slider__contenedor'>
                      {promocionesParaDos.map((compartir, index) => (
                        <PromocionesParaDos key={index} promoDos = {compartir}/>
                      ))}
                  </Slider>
                </div>  

                 {/* FIN - PROMO PARA DOS */}

                 <div>
                  <h1>Complementos</h1>
                  {/* COMPLEMENTOS - PROMOCIONES PERSONALES */}                            
                    <div className='menu__container__complementos'>
                    <Slider {...settingsCards} >
                    {listadoComplementos.map((complemento, index) => (
                    <PromocionesTarjetas key = {index} complementoPromo = {complemento} />
                    ))}
                    </Slider>  
                    </div>
                  {/* FIN COMPLEMENTOS - PROMOCIONES PERSONALES */}
                                        
                  </div>

                {/* PROMOCIONES PARA COMPARTIR */}

            
                <div className='contenedor__promocion__categoria' id='compartir' >
                  <i className="fa-solid fa-people-group"></i>
                  <h3>Promociones para compartir</h3>
                </div>

                <div className='promociones__compartir__contenedor' responsive={settingsResponsive}>
                  <Slider {...settingsAll} responsive={settingsResponsive}  className='slider__contenedor'>
                      {promocionesParaCompartir.map((compartir, index) => (
                        <PromocionesParaCompartir key={index} promoCompartir = {compartir}/>
                      ))}
                  </Slider>
                </div>  
             

                {/*FIN PROMOCIONES PARA COMPARTIR */}

                {/* COMPLEMENTOS */}

                <div>
                  <h1>Complementos</h1>
                  {/* COMPLEMENTOS - PROMOCIONES PERSONALES */}                            
                    <div className='menu__container__complementos'>
                    <Slider {...settingsCards}>
                    {listadoComplementos.map((complemento, index) => (
                    <PromocionesTarjetas key = {index} complementoPromo = {complemento} />
                    ))}
                    </Slider>  
                    </div>
                  {/* FIN COMPLEMENTOS - PROMOCIONES PERSONALES */}
                                        
                  </div>

              {/* FIN COMPLEMENTOS */}

              {/* INICIO CUPONES*/}

                <div className='contenedor__promocion__categoria' id='cupones'>
                  <h3>Cupones</h3>
                </div>

                <div className='promociones__cupones__contenedor'>
      
                  <Slider {...settingsAll} className='slider__contenedor' responsive={settingsResponsive}>     
                      {cupones.map((cupon, index) => (
                        <Cupones key={index} personalCupon = {cupon}/>
                      ))}
                  </Slider>
                </div>   

              {/* FIN CUPONES */} 


            </div>
          </div> 


          {/* FIN SEGUNDA FRANJA (SOLO MOBILE) - PROMOCIÓN AVISO Y BUSCAR */}

          {/* FIN COMPLEMENTOS */}

          {/* PREGUNTAS FRECUENTES */}

          <div className='container__preguntas__frecuentes'>
            <h1 className='titulo__preguntas__frecuentes'>Preguntas Frecuentes de Promociones Delivery Online</h1>
          
          {/* PREGUNTA 1*/}

          <div className= 'preguntas__unidad__container'>

          <div className="preguntas__frecuentes__container">
            <details className="container__por__pregunta">
              <summary className="pregunta__frecuente">
                <h3>¿Las promociones de <strong>hamburguesas delivery</strong> online se pueden pagar presencialmente en mi domicilio?</h3>
              </summary>
              <div className="respuesta__preguntas__promos">
                <p>¡Claro que sí, sobrino! Puedes acceder a las <strong>promociones delivery</strong> online por nuestra Web o App y pagar en casa en efectivo o con tarjeta de crédito o débito Visa o Mastercard. Incluso con Yape. Recuerda que también puedes pagar en línea con tarjeta de manera fácil y 100% segura.</p>
              </div>
            </details>
            <hr className='separador__por__pregunta'/>
          {/* FIN - PREGUNTA 1*/}

          {/* PREGUNTA 2 */}

            <details className="container__por__pregunta">
              <summary className="pregunta__frecuente">
                <h3>¿Con cualquier método de pago accedo a las <strong>promociones de delivery</strong> online de Bembos?</h3>
              </summary>
              <div className="respuesta__preguntas__promos">
                <p>¡Obvio, sobrino! Puedes disfrutar todas nuestras <strong>promociones hoy</strong> online y elegir pagar en efectivo o con tarjetas de crédito o débito Visa o Mastercard. Incluso con Yape.</p>
              </div>
            </details>
            <hr className='separador__por__pregunta'/>
            {/* FIN - PREGUNTA 2 */}

            {/* PREGUNTA 3 */}

            <details className="container__por__pregunta">
              <summary className="pregunta__frecuente">
                <h3>¿En qué ciudades puedo pedir las <strong>Promociones de Delivery</strong></h3>
              </summary>
              <div className="respuesta__preguntas__promos">
                <p>Puedes pedir tu delivery de hamburguesas favoritas en Lima, Arequipa, Cusco, Chiclayo, Huanuco, Ica, Juliaca, Piura, Puno, Tacna Huancayo y Trujillo. Para conocer la ubicación de nuestros locales ingresa a nuestra página de <u>Locales</u>.</p>
              </div>
            </details>
            <hr className='separador__por__pregunta'/>

            {/* FIN PREGUNTA 3 */}

            {/* PREGUNTA 4 */}

            <details className="container__por__pregunta">
              <summary className="pregunta__frecuente">
                <h3>¿Acumulo puntos si elijo las <strong>promociones de delivery</strong> online?</h3>
              </summary>
              <div className="respuesta__preguntas__promos">
                <p>¡Así es, sobrino! Sí acumulas puntos por cada compra Online que realices, sean promociones o productos del <strong>menú de hamburguesas</strong>. Con tus puntos acumulados puedes acceder a promociones exclusivas a través de la Web o App e ir construyendo una Relación con Bembos, a más amor, más beneficios.</p>
              </div>
            </details>
            <hr className='separador__por__pregunta'/>
            {/* FIN PREGUNTA 4 */}

            {/* PREGUNTA 5 */}

            <details className="container__por__pregunta">
              <summary className="pregunta__frecuente">
                <h3>Para acceder a las promociones <strong>online delivery</strong> de Bembos tengo que ser cliente habitual?</h3>
              </summary>
              <div className="respuesta__preguntas__promos">
                <p>¡Bembos es para todos, sobrino! Puedes acceder a nuestras <strong>promociones de delivery</strong> online si es tu primera compra o si ya eres Bembos Lover.</p>
              </div>
            </details>
            <hr className='separador__por__pregunta'/>
          </div>
          </div>
          </div>
        </div>

      </div>
  )
}
