import React from 'react'


export const PromocionesPersonales = ({personalPromo}) => {
  return (
    <div className='prueba'>

        {/* Promociones Personales */}
    
    <div className='general__container__promo__personal'>

            <div className='contenedor__info__details'>       
                <div className='promo__personal__details'>
                    <h3 className='titulo__promo'>{personalPromo.nombre} </h3>
                    <p className='descripcion__promo'> {personalPromo.descripcion} </p>
                </div>

                <div className='container__total__promo__button'>              
                    <div className='precios__promo__personal'>
                        <h2 className='precio__actual'> S/.{personalPromo.precio_actual} </h2>
                        <h2 className='precio__antiguo'> <del> S/.{personalPromo.precio_antiguo} </del> </h2>
                    </div>
                    <button className='button__promo__personal'>Ver más</button>
                </div>
            </div>
    

            <div className='contenedor__promo__personal__img'>
                <div className='contenedor__imagen__promo__personal'>
                    <img src={personalPromo.img} alt="" className='imagen__promo__personal' />
                    <div className='contenedor__precios__promo'>
                        <div>
                        <h4>-{personalPromo.descuento}%</h4>
                        </div>
                        <div>
                        <p> <u>Términos y condiciones</u></p>  
                        </div>                     
                    </div>                     
                          
                </div>      
            </div>
 

    </div>

    </div>
  )
}
