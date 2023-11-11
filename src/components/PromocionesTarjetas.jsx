import React from 'react'

export const PromocionesTarjetas = ({complemento}) => {
  return (
    <div>PromocionesTarjetas

        {/* Promociones Personales */}

{/*         <div className='container__total__promociones__personales'>
            <div className='contenedor__menu__individual'>
                <div className='border__shadow__menu'>
                    <h2 className='tittle__menu'> {menu.nombre} </h2>                     
                    <img src={menu.img} alt="" className='menu__image' />              
                </div>
                <button className='menu__button__ver__todos'>Ver todos</button>
            </div>
        </div> */}

        {/* Complementos */}

        <div>
            <img src={complemento.img} alt="" />
            <h3> {complemento.nombre} </h3>
            <h1> {complemento.precio}</h1>
        </div>







    </div>
  )
}
