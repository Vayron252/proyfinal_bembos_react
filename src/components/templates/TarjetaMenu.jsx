import React from 'react'

export const TarjetaMenu = ({menu}) => {
  return (   
    <div className='container__total__menu'>
        <div className='contenedor__menu__individual'>
            <div className='border__shadow__menu'>
                <h2 className='tittle__menu'> {menu.nombre} </h2>                     
                  <img src={menu.img} alt="" className='menu__image' />              
            </div>
            <button>Ver todos</button>
        </div>
    </div>
  )
}

/* import React from 'react'

export const Card_Info = ( {dogItem} ) => {
  return (

    <div className='card_dog'> 
        <div>
            <h2 className='title'> {dogItem.name} </h2>
            <img src= {dogItem.img} alt= "" className='img_content' />
        </div>  

        <div className='details'>
            <p> <strong> Teléfono: </strong> {dogItem.telefono} </p>
            <p> <strong> País: </strong> {dogItem.pais} </p>
            <p> <strong> Descripción: </strong>{dogItem.descripcion} </p>
        </div>

    </div>
  )
}
 */
