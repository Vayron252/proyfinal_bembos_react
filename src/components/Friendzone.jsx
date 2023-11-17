import React from 'react'

export const Friendzone = ({friendItem}) => {
  return (
    <div className='container__all__friendzone__cards'>

      <div className='container__general__friendzone'>

          <div className='container__img__friendzone'>
            <img src={friendItem.img} alt="" className='image__product__friendzone'/>
            <div className='img__friendzone__info'>              
              <i className="fa-regular fa-heart heart_friendzone"></i>
              <h3 className='text__descount__friendzone'>{friendItem.descuento}%</h3>
            </div>
          </div>

          <div className='container__friendzone__product__details'>

            <div className='container__friendzone__info__above'>
              <div className='container__title__product__friendzone'>
                <h2>{friendItem.nombre}</h2>
              </div>
              <div className='container__info__friendzone'>
                <h1 className='friendzone__precio'>S/.{friendItem.precio}</h1>
                <h3  className='friendzone__puntos'> {friendItem.puntos} </h3>
              </div>
            </div>

            <div className='container__button__friendzone'>
              <button>COMPRAR</button>
            </div>
          </div>
       
      </div>
    </div>
  )
}
