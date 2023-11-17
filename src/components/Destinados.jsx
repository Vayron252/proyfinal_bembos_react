import React from 'react'

export const Destinados = ({destinadosItem}) => {
  return (
    <div>

<div className='container__all__destinados__cards'>

<div className='container__general__destinados'>

    <div className='container__img__destinados'>
      <img src={destinadosItem.img} alt="" className='image__product__destinados'/>
      <div className='img__destinados__info'>              
        <i className="fa-regular fa-heart heart_destinados"></i>
        <h3 className='text__descount__destinados'>{destinadosItem.descuento}%</h3>
      </div>
    </div>

    <div className='container__destinados__product__details'>

      <div className='container__destinados__info__above'>
        <div className='container__title__product__destinados'>
          <h2>{destinadosItem.nombre}</h2>
        </div>
        <div className='container__info__destinados'>
          <h1 className='destinados__precio'>S/.{destinadosItem.precio}</h1>
          <h3  className='destinados__puntos'> {destinadosItem.puntos} </h3>
        </div>
      </div>

      <div className='container__button__destinados'>
        <button>COMPRAR</button>
      </div>
    </div>
</div>
</div>
 </div>
  )
}
