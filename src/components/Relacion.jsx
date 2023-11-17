import React from 'react'

export const Relacion = ({relacionItem}) => {
  return (
<div>

<div className='container__all__relacion__cards'>

<div className='container__general__relacion'>

    <div className='container__img__relacion'>
      <img src={relacionItem.img} alt="" className='image__product__gileos'/>
      <div className='img__relacion__info'>              
        <i className="fa-regular fa-heart heart_relacion"></i>
        <h3 className='text__descount__relacion'>{relacionItem.descuento}%</h3>
      </div>
    </div>

    <div className='container__relacion__product__details'>

      <div className='container__relacion__info__above'>
        <div className='container__title__product__relacion'>
          <h2>{relacionItem.nombre}</h2>
        </div>
        <div className='container__info__relacion'>
          <h1 className='relacion__precio'>S/.{relacionItem.precio}</h1>
          <h3  className='relacion__puntos'> {relacionItem.puntos} </h3>
        </div>
      </div>

      <div className='container__button__relacion'>
        <button>COMPRAR</button>
      </div>
    </div>
</div>
</div>
 </div>
  )
}
