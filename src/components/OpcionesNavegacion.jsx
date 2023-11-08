import { Link } from 'react-router-dom';
import bmb_menu from '../img/bmb_menu.svg'
import bmb_promociones from '../img/bmb_promociones.svg'
import bmb_hamburguesa from '../img/bmb_hamburguesa.svg'
import bmb_beneficios from '../img/bmb_beneficios.svg'

export const OpcionesNavegacion = () => {
  return (
    <>
      <li className="links__opcion">
        <Link className="links__opcion__link" to={'/menu'}>
          <div className="links__opcion__imagen__contenedor">
            <img className="links__opcion__imagen" src={bmb_menu} alt="imagen menu" />
          </div>
          <p className="links__opcion__texto">Menú</p>
        </Link>
      </li>
      <li className="links__opcion">
        <Link className="links__opcion__link"
          to={'/promociones/delivery-hamburguesas'}>
          <div className="links__opcion__imagen__contenedor">
            <img className="links__opcion__imagen" src={bmb_promociones} alt="imagen promociones" />
          </div>
          <p className="links__opcion__texto">Promociones</p>
        </Link>
      </li>
      <li className="links__opcion">
        <Link className="links__opcion__link" to={'/menu/hamburguesas'}>
          <div className="links__opcion__imagen__contenedor">
            <img className="links__opcion__imagen" src={bmb_hamburguesa} alt="imagen hamburguesas" />
          </div>
          <p className="links__opcion__texto">Hamburguesas</p>
        </Link>
      </li>
      <li className="links__opcion">
        <Link className="links__opcion__link" to={'/beneficios'}>
          <div className="links__opcion__imagen__contenedor">
            <img className="links__opcion__imagen" src={bmb_beneficios} alt="imagen beneficios" />
          </div>
          <p className="links__opcion__texto">Beneficios</p>
        </Link>
      </li>
    </>
  )
}
