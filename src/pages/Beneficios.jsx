import React, { useState } from 'react';
/* import { useLoaderData, Link } from 'react-router-dom'; */
import friendzone from '../img/friendzone.png'
import gileos from '../img/gileos.png'
import relacion from '../img/relacion.png'
import destinados from '../img/destinados.png'
import friendzone_mini from '../img/friendzone_mini.png'
import gileos_mini from '../img/gileos_mini.png'
import relacion_mini from '../img/relacion_mini.png'
import destinados_mini from '../img/destinados_mini.png'
/* import obtenerBeneficios from '../data/bembosAPI' */
import '../styles/beneficios.css'


/* import { Friendzone } from '../components/Friendzone'; */

/* export const loader = async ( {params} ) => {
  const  {categoria}  = params;
  const existeBeneficio = await obtenerBeneficios();
  

  const beneficiosCategorias = await obtenerBeneficios('friendzone','gileos','relacion','destinados')  
  return {beneficiosCategorias};
} */


export const Beneficios = () => {
  const [nombrediv, setNombrediv] = useState('friendzone');

  const handleClick = (nombre) => {
    setNombrediv(nombre);
  }

  return (

  <div className='contenedor__toda__pagina__beneficios'>
    <div className='container__all__beneficios'>
      
      <div className='container__info__beneficios'>
        <div className='encabezado__beneficios'>         
            <h1>DISFRUTA DE NUESTROS BENEFICIOS BEMBOS</h1>
        </div>
      </div>

      {/* CONTENEDOR - MENÚ BENFICIOS */}

      <div className='container__menu__benefit'>
        <div className={`container__menu__category${nombrediv === 'friendzone' ? ' active' : ''}`} onClick={() => handleClick('friendzone')}>        
            <img src={friendzone} alt="" />
            <h2>FRIENDZONE</h2>               
        </div>

        <div className={`container__menu__category${nombrediv === 'gileos' ? ' active' : ''}`} onClick={() => handleClick('gileos')}>
          <img src={gileos} alt="" /> 
          <h2>GILEOS</h2> 
        </div>

        <div className={`container__menu__category${nombrediv === 'relacion' ? ' active' : ''}`} onClick={() => handleClick('relacion')}>          
          <img src={relacion} alt=""/>   
          <h2>RELACIÓN</h2>      
        </div>

        <div className={`container__menu__category${nombrediv === 'destinados' ? ' active' : ''}`} onClick={() => handleClick('destinados')}>   
            <img src={destinados} alt="" /> 
            <h2>DESTINADOS</h2>                     
        </div>
      </div>

      <div className='container__separation__menu__benefit'>
        <hr className='separation__menu__benefit' />        
      </div>

    {/* FRIENDZONE_INFO */}
  <div className=''>
    <div className='container__friendzone__info'>
      <div className='container__info__details__friendzone'>
        <div className='friendzone__info__title'>
          <img src={friendzone_mini} alt="" />
          <h1>FRIENDZONE</h1>
          <h3>INICIA SESIÓN</h3>
        </div>
        <div className='slogan__friendzone'>
          <h3>PROMOCIONES POR TU AMISTAD</h3>
        </div>
      </div>
    </div>

    <div>
    {/* {beneficiosCategorias.map((item, index) => (
      <Friendzone key = {index} friendzone = {item}/>
      ))} */}
    </div>
    {/* FIN FRIENDZONE_INFO */}


    {/* GILEOS_INFO */}
    <div className='container__gileos__info'>
      <div className='container__info__details__gileos'>
        <div className='gileos__info__title'>
          <img src={gileos_mini} alt="" />
          <h1>GILEOS</h1>
          <h3>ALCANZA 100<span className='pts_gileos'>PTS</span></h3>
        </div>
        <div className='slogan__gileos'>
          <h3>MULTIPLICA PUNTOS X2</h3>
        </div>
      </div>
    </div>
    {/* FIN GILEOS_INFO */}

    {/* RELACIÓN_INFO */}
    <div className='container__relacion__info'>
      <div className='container__info__details__relacion'>
        <div className='relacion__info__title'>
          <img src={relacion_mini} alt="" />
          <h1>RELACIÓN</h1>
          <h3>ALCANZA 400<span className='pts_relacion'>PTS</span></h3>
        </div>
        <div className='slogan__relacion'>
          <h3>MULTIPLICA PUNTOS X3 | <span className='delivery__relacion'>Delivery</span> <strong>GRATIS</strong></h3>
        </div>
      </div>
    </div>
    {/* FIN RELACIÓN_INFO */}

    {/* DESTINADOS_INFO */}
    <div className='container__destinados__info'>
      <div className='container__info__details__destinados'>
        <div className='destinados__info__title'>
          <img src={destinados_mini} alt="" />
          <h1>DESTINADOS</h1>
          <h3>ALCANZA 700<span className='pts_destinados'>PTS</span></h3>
        </div>
        <div className='slogan__destinados'>
          <h3>MULTIPLICA PUNTOS X4 | <span className='delivery__destinados'>Delivery</span> <strong>GRATIS</strong></h3>
        </div>
      </div>
    </div>
    {/* FIN DESTINADOS_INFO */}
  </div>  

  
    {/* FIN CONTENEDOR - MENÚ BENFICIOS */}


    {/* GILEOS_INFO */}

    
    {/* FIN GILEOS_INFO */}

    {/* RELACION_INFO */}
    {/* FIN RELACION_INFO */}

    {/* DESTINADOS_INFO */}
    {/* FIN DESTINADOS_INFO */}


      {/* PREGUNTAS FRECUENTES */}

          <div className='container__preguntas__beneficios'>
            <h1 className='titulo__preguntas__beneficios'>Preguntas Frecuentes</h1>
          
          {/* PREGUNTA 1*/}
            <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Cómo funcionan los puntos?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Tus consumos se convierten en puntos para acceder a distintos estados de relación y así seguir obteniendo más productos. Conforme vayas fortaleciendo la relación, podrás acceder a más beneficios y descuentos.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 1*/}

          {/* PREGUNTA 2*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Cuáles son los beneficios?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Existen diferentes beneficios en cada estado de relación que vas alcanzando. Puedes tener desde descuentos con más del 30% hasta delivery gratis.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 2*/}  

          {/* PREGUNTA 3*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Hay beneficios por el método de pago?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Actualmente no existe un beneficio por pagar a través de un método de pago en particular.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 3*/}       

          {/* PREGUNTA 4*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Los cupones de descuentos tienen fecha límite para usar?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Si tienen una fecha límite y puedes revisar los legales en el pie de página del mismo.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 4*/}   
          
          {/* PREGUNTA 5*/}
          <div className= 'preguntas__unidad__container'>
              <div class="preguntas__beneficios__container">
                <details class="container__por__pregunta__beneficios">
                  <summary className="pregunta__beneficios">
                    <h3>¿Hay beneficios en compras por la App?</h3>
                  </summary>
                  <div className="respuesta__preguntas__beneficios">
                    <p>Haciendo tu compra a través de la APP o el sitio web podrás acumular puntos para tener más beneficios con nosotros.</p>
                  </div>
                </details>
              </div>
            </div>
                     
    </div>
    </div>
    </div>
  )
}
