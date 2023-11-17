import React from 'react'

export const Gileos = ({gileoItem}) => {
  return (
<div>

<div className='container__all__gileos__cards'>

<div className='container__general__gileos'>

    <div className='container__img__gileos'>
      <img src={gileoItem.img} alt="" className='image__product__gileos'/>
      <div className='img__gileos__info'>              
        <i className="fa-regular fa-heart heart_gileos"></i>
        <h3 className='text__descount__gileos'>{gileoItem.descuento}%</h3>
      </div>
    </div>

    <div className='container__gileos__product__details'>

      <div className='container__gileos__info__above'>
        <div className='container__title__product__gileos'>
          <h2>{gileoItem.nombre}</h2>
        </div>
        <div className='container__info__gileos'>
          <h1 className='gileos__precio'>S/.{gileoItem.precio}</h1>
          <h3  className='gileos__puntos'> {gileoItem.puntos} </h3>
        </div>
      </div>

      <div className='container__button__gileos'>
        <button>COMPRAR</button>
      </div>
    </div>
</div>
</div>
 </div>
  )
}
