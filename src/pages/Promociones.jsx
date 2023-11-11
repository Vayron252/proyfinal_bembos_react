import { useLoaderData, Link } from 'react-router-dom';
import '../styles/promociones.css'
import Slider from "react-slick"
import { useScrollPosition } from '../hooks/useScrollPosition'
import { PromocionesTarjetas } from '../components/PromocionesTarjetas'
import { useState } from 'react';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
                       
export const Promociones = () => {

  /* const { listadoComplementos } = useLoaderData(); */

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const settingsCards = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };


  return (


      <div className='container__todo__pagina__promociones'>

        <div className='contenedor__total__promociones'>
          <div className='contenedor__promociones__seleccion'>
            <button>Promociones Personales</button>
            <button>Promociones para 2</button>
            <button>Promociones para compartir</button>
            <button>Cupones</button>
          </div>
        </div>

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
              <i class="fa-solid fa-magnifying-glass icono__buscar"></i>
            </div>
          </div>
        </div>      
        <hr className='separador__encabezado__promo__buscador'/> 

        <div className='contenedor__menu__promociones__mobile'>
        <Slider {...settings}>

            <div className='contenedor__button__menu__mobile'>
              <button>Promociones Personales</button>
            </div>
            <div className='contenedor__button__menu__mobile'>
              <button>Promociones para 2</button>
            </div>
            <div className='contenedor__button__menu__mobile'>
              <button>Promociones para compartir</button>
            </div>
            <div className='contenedor__button__menu__mobile'>
              <button>Cupones</button>
            </div>
        </Slider>    
        <hr />     
        </div> 
      {/*   <li className="opcion__menu">
                  <Link className="opcion__menu__link" to={'/promociones/delivery-hamburguesas'}>Promociones Exclusivas Web</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/combos' ? ' active' : ''}`} to={'/menu/combos'}>Combos</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/hamburguesas' ? ' active' : ''}`} to={'/menu/hamburguesas'}>Hamburguesas</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/pollo' ? ' active' : ''}`} to={'/menu/pollo'}>Pollo</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/loncheritas' ? ' active' : ''}`} to={'/menu/loncheritas'}>Loncheritas</Link>
              </li> */}





        {/* PROMOCIÓN-AVISO Y BUSCAR (SOLO TABLET) */}
      
        <div className='container__solo__tablet'>
        <div className='contenedor__total__promo__buscar'>
          <div className='contenedor__texto__promocion__especial'>
            <p className='texto__solo__computadora texto__solo__tablet'>¡Por cada promo online, llévate 2 papas medianas a S/5.90!</p>
          </div>
          <div className='contenedor__total__buscar__producto container__buscar__producto__tablet'>
            <div className='contenedor__buscar__producto '>
              <input type="text" placeholder='Buscar tu producto'/>
              <i class="fa-solid fa-magnifying-glass icono__buscar"></i>
            </div>
          </div>
        </div>   
        </div>   
        {/* FIN -PROMOCIÓN-AVISO Y BUSCAR (SOLO TABLET) */}

        <div className='promociones__categoria__total'>
          <div className='contenedor__promociones__categorias'>
            <div className='titulo__promociones__lista'>
                <h1>PROMOCIONES DE HAMBURGUESAS PARA TI CON DELIVERY</h1>
            </div>
                <hr className='separador__promociones__categorias'/>

              <div className='contenedor__promocion__categoria'>
                <i class="fa-solid fa-user"></i>
                <h3>Promociones Personales</h3>
              </div>

              <div className='contenedor__promocion__categoria'>
                <i class="fa-solid fa-user-group"></i>
                <h3>Promociones para dos</h3>
              </div>

              <div className='contenedor__promocion__categoria'>
                <i class="fa-solid fa-people-group"></i>
                <h3>Promociones para compartir</h3>
              </div>
            </div>
        </div> 
        
         {/* FIN SEGUNDA FRANJA - PROMOCIÓN AVISO Y BUSCAR */}

         {/* SEGUNDA FRANJA (SOLO MOBILE) - PROMOCIÓN AVISO Y BUSCAR */}



         {/* FIN SEGUNDA FRANJA (SOLO MOBILE) - PROMOCIÓN AVISO Y BUSCAR */}


        {/* PARA LOS SIGUIENTES */} 



        {/* COMPLEMENTOS */}
{/*        <div className='menu__container__complementos'>
        {listadoComplementos.map((complemento, index) => (
          <PromocionesTarjetas key = {index} complementoPromo = {complemento} />
        ))}
      </div>  */}

  {/*     <div className='menu__container__cards'>
        {listadoMenu.map((menu, index) => (
          <TarjetaMenu key = {index} menu = {menu} />
        ))}
      </div>
 */}

{/* const[mostrarPrimerContenido, setMostrarPrimerContenido] = useState(true)
  const [mostrarSegundoContenido, setMostrarSegundoContenido] = useState(false)
  const [mostrarTercerContenido, setMostrarTercerContenido] = useState(false)
  const [mostrarCuartoContenido, setMostrarCuartoContenido] = useState(false)
       */}

        {/* FIN COMPLEMENTOS */}

        {/* PREGUNTAS FRECUENTES */}

        <div className='container__preguntas__frecuentes'>
          <h1 className='titulo__preguntas__frecuentes'>Preguntas Frecuentes de Promociones Delivery Online</h1>
        
        {/* PREGUNTA 1*/}
        <div className= 'preguntas__unidad__container'>
          <div className= 'preguntas__unidad'>
            <h2>¿Las promociones de <strong>hamburguesas delivery</strong> online se pueden pagar presencialmente en mi domicilio?</h2>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
           <div className= 'respuesta__preguntas'>
            <p>¡Claro que sí, sobrino! Puedes acceder a las <strong>promociones delivery</strong> online por nuestra Web o App y pagar en casa en efectivo o con tarjeta de crédito o débito Visa o Mastercard. Incluso con Yape. Recuerda que también puedes pagar en línea con tarjeta de manera fácil y 100% segura.</p>
          </div>
          <hr className='separador__pregunta__unit'/>
           {/* FIN - PREGUNTA 1*/}

           {/* PREGUNTA - 2 */}
          <div className='preguntas__unidad__second'>
            <h2>¿Con cualquier método de pago accedo a las <strong>promociones de delivery</strong> online de Bembos?</h2>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
           <div className= 'respuesta__preguntas'>
            <p>¡Obvio, sobrino! Puedes disfrutar todas nuestras <strong>promociones hoy</strong> online y elegir pagar en efectivo o con tarjetas de crédito o débito Visa o Mastercard. Incluso con Yape.</p>
          </div>
          <hr className='separador__pregunta__unit'/>
          {/* FIN PREGUNTA - 2 */}

          {/* PREGUNTA - 3 */}
          <div className='preguntas__unidad__third'>
            <h2>¿En qué ciudades puedo pedir las <strong>Promociones de Delivery</strong></h2>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
           <div className='respuesta__preguntas'>
            <p>Puedes pedir tu delivery de hamburguesas favoritas en Lima, Arequipa, Cusco, Chiclayo, Huanuco, Ica, Juliaca, Piura, Puno, Tacna Huancayo y Trujillo. Para conocer la ubicación de nuestros locales ingresa a nuestra página de <u>Locales</u>.</p>
          </div>
          <hr className='separador__pregunta__unit'/>
          {/* FIN PREGUNTA - 3 */}

          {/* PREGUNTA - 4 */}
          <div className='preguntas__unidad__forth'>
            <h2>¿Acumulo puntos si elijo las <strong>promociones de delivery</strong> online?</h2>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
           <div className='respuesta__preguntas'>
            <p>¡Así es, sobrino! Sí acumulas puntos por cada compra Online que realices, sean promociones o productos del <strong>menú de hamburguesas</strong>. Con tus puntos acumulados puedes acceder a promociones exclusivas a través de la Web o App e ir construyendo una Relación con Bembos, a más amor, más beneficios.</p>
          </div>
          <hr className='separador__pregunta__unit'/>
          {/* FIN PREGUNTA - 4 */}

          {/* PREGUNTA - 5 */}
          <div className='preguntas__unidad__fifth'>
            <h2>Para acceder a las promociones <strong>online delivery</strong> de Bembos tengo que ser cliente habitual?</h2>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
           <div className='respuesta__preguntas'>
            <p>¡Bembos es para todos, sobrino! Puedes acceder a nuestras <strong>promociones de delivery</strong> online si es tu primera compra o si ya eres Bembos Lover.
            </p>
          </div>
          <hr className='separador__pregunta__unit'/>
          {/* FIN PREGUNTA - 5 */}



        </div>
  
        {/* FIN_PREGUNTA 1*/}

        

        








        </div>

      </div>
  )
}

