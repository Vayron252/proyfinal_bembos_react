import { useLoaderData, Link, useLocation, useParams } from 'react-router-dom';
import { obtenerListadoProductosXOpcion } from '../data/bembosAPI'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useCarroCompras } from '../hooks/useCarroCompras'
import { Tarjeta } from '../components/Tarjeta'
import Slider from "react-slick"
import '../styles/tarjetas.css'
import '../styles/secciones.css'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const loader = ({ params }) => {
  const { categoria } = params;
  const listadoOpciones = obtenerListadoProductosXOpcion(categoria);
  return listadoOpciones;
}

export const MenuOpciones = ({ params }) => {
  const { categoria }  = useParams();
  const location = useLocation();
  const scrollPosition = useScrollPosition();
  const listado = useLoaderData();
  const { setMostrarCarro, mostrarSuTotalCarrito } = useCarroCompras();

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true
  };

  return (
    <>
      <div className="contenedor__opciones__menu">
        <ul className={`listado__opciones__menu${scrollPosition > 0 ? ' normal' : ''}`}>
          <li className="opcion__menu">
            <Link className="opcion__menu__link" to={'/promociones/delivery-hamburguesas'}>Promociones Exclusivas Web</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/combos' ? ' active' : ''}`} to={'/menu/combos'}>Combos</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/hamburguesas' ? ' active' : ''}`} to={'/menu/hamburguesas'}>Hamburguesas</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/pollo' ? ' active' : ''}`} to={'/menu/pollo'}>Pollo</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/loncheritas' ? ' active' : ''}`} to={'/menu/loncheritas'}>Loncheritas</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/complementos' ? ' active' : ''}`} to={'/menu/complementos'}>Complementos</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/bebidas' ? ' active' : ''}`} to={'/menu/bebidas'}>Bebidas</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/helados' ? ' active' : ''}`} to={'/menu/helados'}>Helados</Link>
          </li>
          <li className="opcion__menu">
            <Link className={`opcion__menu__link${location.pathname === '/menu/inka-chips' ? ' active' : ''}`} to={'/menu/inka-chips'}>Inka Chips</Link>
          </li>
        </ul>
      </div>

      <section className="seccion__listado__productos contenedor">
        <h2 className="listado_productos__titulo">TITULO DE NUESTRO LISTADO DE PRODUCTOS</h2>
        <div className="listado__productos">
          {listado.map(producto => (
            <Tarjeta key={producto.id}>
              <Link to={`/menu/${categoria}/${producto.link}`}>
                <div className="tarjeta">
                  <div className="tarjeta__contenedor__imagen">
                    <img className="tarjeta__imagen" src={producto.img} alt="imagen producto" />
                  </div>
                  <div className="tarjeta__contenido">
                    <div className="tarjeta__contenido__informacion">
                      <h4 className="tarjeta__titulo">{producto.nombre}</h4>
                      <p className="tarjeta__precio">{`S/. ${producto.precio}`}</p>
                      {location.pathname === '/menu/combos' ? <></> : (
                        <p className="tarjeta__terminosycondiciones">Términos y Condiciones</p>
                      )}
                    </div>
                    <button className="tarjeta__boton">Ver más</button>
                  </div>
                </div>
              </Link>
            </Tarjeta>
          ))}
        </div>
      </section>

      <section className="seccion__menu__opciones__carro">
        <div className="contenedor__slice__opciones__menu">
          <Slider {...settings}>
              <li className="opcion__menu">
                  <Link className="opcion__menu__link" to={'/promociones/delivery-hamburguesas'}>Promociones Exclusivas Web</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/combos' ? ' active' : ''}`} to={'/menu/combos'}>Combos</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/hamburguesas' ? ' active' : ''}`} to={'/menu/hamburguesas'}>Hamburguesas</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/pollo' ? ' active' : ''}`} to={'/menu/pollo'}>Pollo</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/loncheritas' ? ' active' : ''}`} to={'/menu/loncheritas'}>Loncheritas</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/complementos' ? ' active' : ''}`} to={'/menu/complementos'}>Complementos</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/bebidas' ? ' active' : ''}`} to={'/menu/bebidas'}>Bebidas</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/helados' ? ' active' : ''}`} to={'/menu/helados'}>Helados</Link>
              </li>
              <li className="opcion__menu">
                  <Link className={`opcion__menu__link${location.pathname === '/menu/inka-chips' ? ' active' : ''}`} to={'/menu/inka-chips'}>Inka Chips</Link>
              </li>
          </Slider>
          <div className="opcion__ver__carrito__contenedor">
            <button className="opcion__ver__carrito" onClick={() => setMostrarCarro(true)}>
              <i className="fa-solid fa-cart-shopping ver__carrito__imagen"></i>
              <p className="ver__carrito__texto">Ver Carrito de compra</p>
              <p className="ver__carrito__monto">{`S/. ${mostrarSuTotalCarrito()}`}</p>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
