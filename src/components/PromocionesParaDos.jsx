import React from 'react'


export const PromocionesParaDos= ({promoDos}) => {
  return (
    <div>

        {/* Promociones Personales */}
    
    <div className='general__container__compartir'>

            <div className='contenedor__compartir__details'>       
                <div className='promo__compartir__details'>
                    <h3 className='titulo__compartir__azul'>{promoDos.nombre_azul} </h3>
                    <h3 className='titulo__compartir__negro'>{promoDos.nombre_negro} </h3>
                    <p className='descripcion__compartir'> {promoDos.descripcion} </p>
                </div>

                <div className='container__total__promo__button'>              
                    <div className='precios__promo__personal'>
                        <h2 className='precio__actual__compartir'> S/.{promoDos.precio_actual} </h2>
                        <h2 className='precio__antiguo__compartir'> <del> S/.{promoDos.precio_antiguo} </del> </h2>
                    </div>
                    <button className='button__compartir__promo'>Ver más</button>
                </div>
            </div>
    

            <div className='contenedor__compartir__img'>
                <div className='contenedor__imagen__compartir'>
                    <img src={promoDos.img} alt="" className='imagen__compartir' />
                    <div className='contenedor__precios__compartir'>
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
