import React from 'react'

export const PromocionesTarjetas = ({complementoPromo}) => {
  return (
    <div>

        {/* Promociones Personales */}


        {/* Complementos */}

        <div className='contenedor__card__complementos'>
            <div className='contenedor__img'>
                <img src={complementoPromo.img} alt="" className='img__complementos'/>
                <h5 className='terminos__condiciones__complementos'> <u>Términos y condiciones</u></h5>
            </div>

            <div className='card__info__details'>
                <h3 className='titulo__complementos'> {complementoPromo.nombre}</h3>
                <h1 className='precio__complementos'> S/.{complementoPromo.precio}</h1>
                <button className='button__complementos'>Ver más</button>
            </div>

        </div>

        {/* Fin complementos */}



    </div>
  )
}
