import React from 'react'


export const PromocionesParaCompartir= ({promoCompartir}) => {
  return (
    <div className='container__all__promo__compartir'>

        {/* Promociones Personales */}
    
    <div className='general__container__compartir'>

            <div className='contenedor__compartir__details'>       
                <div className='promo__compartir__details'>
                    <h3 className='titulo__compartir__azul'>{promoCompartir.nombre_azul} </h3>
                    <h3 className='titulo__compartir__negro'>{promoCompartir.nombre_negro} </h3>
                    <p className='descripcion__compartir'> {promoCompartir.descripcion} </p>
                </div>

                <div className='container__total__compartir__button'>              
                    <div className='precios__promo__compartir'>
                        <h2 className='precio__actual__compartir'> S/.{promoCompartir.precio_actual} </h2>
                        <h2 className='precio__antiguo__compartir'> <del> S/.{promoCompartir.precio_antiguo} </del> </h2>
                    </div>
                    <button className='button__compartir__promo'>Ver más</button>
                </div>
            </div>
    

            <div className='contenedor__compartir__img'>
                <div className='contenedor__imagen__compartir'>
                    <img src={promoCompartir.img} alt="" className='imagen__compartir' />
                    <div className='contenedor__precios__compartir'>
                        <div className='contenedor__exclusivo__web'>
                            <h4>-{promoCompartir.descuento}%</h4>
                            <img src={promoCompartir.img_web} alt="" className='image__web'/>                           
                        </div>                       
                    <div>                        
                        <p> 
                        <u className='terminos__blanco'> {promoCompartir.terminos_blanco}</u> <u className='terminos__negro'>{promoCompartir.terminos_negro} </u>                     
                        </p>                        
                    </div>                     
                    </div>                                              
                </div>      
            </div>
 

    </div>

    </div>
  )
}
