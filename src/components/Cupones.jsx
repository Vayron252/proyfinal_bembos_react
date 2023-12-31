import React from 'react'
import { useState } from 'react';

export const Cupones = ({personalCupon}) => {

  return (
    <div className='container__all__cupones'>

        {/* Cupones */}
    
    <div className='general__container__cupon__personal'>

            
            <div className='contenedor__cupon__details'>    

                <div className='cupon__info__details'>
                    <img src={personalCupon.entel_img} alt="" className='entel__image' />
                    <h3 className='titulo__cupon'>{personalCupon.nombre} </h3>
                    <p className='descripcion__cupon'> {personalCupon.descripcion} </p>
                    <p className='aviso__cupon'>{personalCupon.aviso} </p>
                </div>
               

                <div className='container__total__cupon__button'>             
                    <div className='precios__cupon__personal'>
                        <h2 className='precio__actual__cupon'> S/.{personalCupon.precio_actual} </h2>
                        <h2 className='precio__antiguo__cupon'> {personalCupon.precio_antiguo} </h2>
                    </div>       
                    <button className='button__cupon__personal'>Ver más</button>
                </div>
            </div>

    

            <div className='contenedor__cupon__personal__img'>
                <div className='contenedor__imagen__cupon__personal'>
                    <img src={personalCupon.img} alt="" className= 'imagen__cupon__personal'/>

                    <div className='contenedor__precios__cupon'>
                        {/* { precanterior > 0 ? <p>30.5</p> : <p></p> } */}
                        <div>
                        <h4 className='descuento__cupon'>{personalCupon.descuento }%</h4>
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
