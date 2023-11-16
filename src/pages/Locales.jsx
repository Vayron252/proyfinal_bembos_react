
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

          <div className='container__questions__locals'>
            <h1 className='title__questions__locals'>Preguntas Frecuentes</h1>
          
          {/* PREGUNTA 1*/}
            <div className= 'questions__unit__container'>
              <div class="questions__locals__container">
                <details class="container__per__question__locals">
                  <summary className="questions__locals">
                    <h3>¿En qué ciudades hay locales físicos para compras de hamburguesas?</h3>
                  </summary>
                  <div className="answers__questions__locals">
                    <p>Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En Lima contamos con locales hamburguesas en Ate, Chorrillos, Cercado de lima, Comas, Independencia, Jesus María, La Molina, La Victoria, Magdalena del Mar, Miraflores, Pueblo Libre, San Borja, San Isidro, Miraflores, San Martin de Porres, San Miguel, Santa Anita, Surco, Surquillo.</p>
                  </div>
                </details>
              </div>
            </div>
          {/* FIN - PREGUNTA 1*/}

          {/* PREGUNTA 2*/}

          <div className= 'questions__unit__container'>
              <div class="questions__locals__container">
                <details class="container__per__question__locals">
                  <summary className="questions__locals">
                    <h3>¿Qué horario tienen los locales de Bembos?</h3>
                  </summary>
                  <div className="answers__questions__locals">
                    <p>El horario de atención es de 11am a 10:30pm. Pueden haber ciertas variaciones por local.
                    Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En Lima contamos con locales hamburguesas en Ate, Chorrillos, Cercado de Lima, Comas, Independencia, Jesus María, La Molina, La Victoria, Magdalena del Mar, Miraflores, Pueblo Libre, San Borja, San Isidro, Miraflores, San Martin de Porres, San Miguel, Santa Anita, Surco, Surquillo.</p>
                  </div>
                </details>
              </div>
            </div>
          
          {/* FIN - PREGUNTA 2*/}  

          {/* PREGUNTA 3*/}
          <div className= 'questions__unit__container'>
              <div class="questions__locals__container">
                <details class="container__per__question__locals">
                  <summary className="questions__locals">
                    <h3>¿Cuál es el telefono de contacto?</h3>
                  </summary>
                  <div className="answers__questions__locals">
                    <p>El teléfono de Delivery a través es el 01419-1919 para Lima.
                    Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En Lima contamos con locales hamburguesas en Ate, Chorrillos, Cercado de Lima, Comas, Independencia, Jesus María, La Molina, La Victoria, Magdalena del Mar, Miraflores, Pueblo Libre, San Borja, San Isidro, Miraflores, San Martin de Porres, San Miguel, Santa Anita, Surco, Surquillo.</p>
                  </div>
                </details>
              </div>
            </div>
         
          {/* FIN - PREGUNTA 3*/}       

          {/* PREGUNTA 4*/}

          <div className= 'questions__unit__container'>
              <div class="questions__locals__container">
                <details class="container__per__question__locals">
                  <summary className="questions__locals">
                    <h3>¿Puedo obtener puntos por compras en los locales físicos?</h3>
                  </summary>
                  <div className="answers__questions__locals">
                    <p>Los puntos solo pueden obtenerse por las compras realizadas desde el canal de Web y la App de Bembos.
                    Los locales físicos con atención al público están en las siguientes ciudades: Chiclayo, Cusco, Juliaca, Huancayo, Piura, Puno, Tacna, Trujillo y Arequipa. En Lima contamos con locales hamburguesas en Ate, Chorrillos, Cercado de Lima, Comas, Independencia, Jesus María, La Molina, La Victoria, Magdalena del Mar, Miraflores, Pueblo Libre, San Borja, San Isidro, Miraflores, San Martin de Porres, San Miguel, Santa Anita, Surco, Surquillo.</p>
                  </div>
                </details>
              </div>
            </div>
         
          {/* FIN - PREGUNTA 4*/}   
          
    </div>
      </div>
    </div>
  )
}
