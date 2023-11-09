import { Link, useLoaderData } from 'react-router-dom'
import {AutoSlider} from '../components/AutoSlider'
import '../styles/menu.css'
import { obtenerListadoMenu } from '../data/bembosAPI'
import { TarjetaMenu } from '../components/TarjetaMenu'

export const loader = () => {
  const listadoMenu = obtenerListadoMenu();
  return { listadoMenu };
}

export const Menu = () => {

  const { listadoMenu } = useLoaderData();

  return (
    <div className="contenedor__menu">


      <div className='contenedor__encabezado__menu'>

      <div className='contenedor__informacion__encabezado'>

          <div className='contenedor__menu__cambios'>
            <div className='menu__notice'>
              <h4>Se está mostrando el menú del restaurante</h4>
              <div className='menu__location'>
                <i class="fa-solid fa-location-dot"></i>
                <h2>GENERAL</h2>
              </div>
            </div>
            <button>CAMBIAR</button>
          </div>

          {/* ENCABEZADO PARA MOBILE Y TABLET */}

          <div className='container__encabezado__mobile__tablet__all'>
            <div className='container__encabezado__mobile__tablet'>
              <div>
                <h4 className='titulo__encabezado__h4'>Se está mostrando el menú del restaurante</h4>
              </div>

              <div className='container__encabezado__location__mobile__tablet'>
                <div className='general__mobile__tablet'>
                  <i class="fa-solid fa-location-dot"></i>
                  <h2>GENERAL</h2>
                </div>
                <div className='container__button__mobile__tablet'>
                  <button className='button__cambiar__mobile__tablet'>CAMBIAR</button>
                </div>
              </div>
            </div>
          </div>
          {/* FINAL - ENCABEZADO PARA MOBILE Y TABLET */}

          <div className='container__elige__menu'>
          <h1>ELIGE TU MENÚ BEMBOS</h1>
          <hr/>
          <div className='contenedor__autoslider'>
          <AutoSlider/>
          </div>
          </div>
      </div>     

      {/* ENCABEZADO TABLET Y MOBILE */}
        
      <div className='menu__container__cards'>
        {listadoMenu.map((menu, index) => (
          <TarjetaMenu key = {index} menu = {menu} />
        ))}
      </div>
       
    </div>
    </div>
  )
}
