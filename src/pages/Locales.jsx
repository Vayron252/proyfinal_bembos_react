
import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { obtenerLocales } from '../data/bembosAPI';
import '../styles/locales.css';
import { LocalsTemplate } from '../components/LocalsTemplate'


export const loader = async () => {
  const locales = await obtenerLocales('')
  return {locales};
}

export const Locales = () => {

  const { locales } = useLoaderData();

  // console.log(locales)
  // console.log(locales[0])
  // console.log(locales[0].distritos)
  // console.log(locales[0])

  return (
    <div className='container__total__locals'>

      <div className='container__info__locals'>
        <div className='container__title__locals'>        
          <h1>Locales Bembos: Hamburguesas a la Parrilla Cerca de ti</h1>
        </div> 
        <div className='container__locals'>   
          <div className='container__city_district'>
              <LocalsTemplate key={0} local={locales[0]} />
              <div className='container__city__locals'>
                {locales.map((local, index) => (
                  index !== 0 ? <LocalsTemplate key={index} local={local} /> : <></>
                ))}   
              </div> 
          </div>    
        </div>

     

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
