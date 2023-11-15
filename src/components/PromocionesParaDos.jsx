import React from 'react'


export const PromocionesParaDos= ({promoDos}) => {
  return (
    <div className='container__all__promo__dos'>

        {/* Promociones Personales */}
    
    <div className='general__container__dos'>

            <div className='contenedor__dos__details'>       
                <div className='promo__dos__details'>
                    <h3 className='titulo__dos__azul'>{promoDos.nombre_azul} </h3>
                    <h3 className='titulo__dos__negro'>{promoDos.nombre_negro} </h3>
                    <p className='descripcion__dos'> {promoDos.descripcion} </p>
                </div>

                <div className='container__total__dos__button'>              
                    <div className='precios__promo__dos'>
                        <h2 className='precio__actual__dos'> S/.{promoDos.precio_actual} </h2>
                        <h2 className='precio__antiguo__dos'> <del> S/.{promoDos.precio_antiguo} </del> </h2>
                    </div>
                    <button className='button__dos__promo'>Ver más</button>
                </div>
            </div>
    

            <div className='contenedor__dos__img'>
                <div className='contenedor__imagen__dos'>
                    <img src={promoDos.img} alt="" className='imagen__dos' />
                    <div className='contenedor__precios__dos'>
                        <div className='contenedor__exclusivo__web'>
                            <h4>-{promoDos.descuento}%</h4>
                            <img src={promoDos.img_web} alt="" className='image__web'/>                           
                        </div>                       
                        <div>                        
                        <p> 
                        <u className='terminos__blanco'> {promoDos.terminos_blanco}</u> <u className='terminos__negro'>{promoDos.terminos_negro} </u>                     
                        </p>                        
                    </div>                     
                    </div>                                              
                </div>      
            </div>
 

    </div>

    </div>
  )
}
