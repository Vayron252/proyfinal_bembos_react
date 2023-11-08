import { Link } from 'react-router-dom'
import {AutoSlider} from '../components/AutoSlider'
import '../styles/menu.css'


export const loader = () => {
  return ""
}

export const Menu = () => {
  return (
    <div className="contenedor__menu">
        <AutoSlider/>

        <div className='contenedor__menuChange'>
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

        <hr />

    </div>
  )
}
