import { Link } from 'react-router-dom'
import React from 'react'

export const TarjetaMenu = ({menu}) => {
  return (   
    <div className='container__total__menu'>
        <Link to={menu.link}>
          <div className='contenedor__menu__individual'>
              <div className='border__shadow__menu'>
                  <h2 className='tittle__menu'> {menu.nombre} </h2>                     
                    <img src={menu.img} alt="" className='menu__image' />              
              </div>
              <button className='menu__button__ver__todos'>Ver todos</button>
          </div>
        </Link>
    </div>
  )
}

