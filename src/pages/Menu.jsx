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
          
          <h1>ELIGE TU MENÚ BEMBOS</h1>
          <hr/>
          <AutoSlider/>
      </div>
       
    </div>
        
      <div className='menu__container__cards'>
        {listadoMenu.map((menu, index) => (
          <TarjetaMenu key = {index} menu = {menu} />
        ))}
      </div>        
    </div>
  )
}
