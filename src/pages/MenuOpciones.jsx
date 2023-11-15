import { useState } from 'react';
import { useLoaderData, Link, useLocation, useParams } from 'react-router-dom';
import { obtenerListadoMenu, obtenerListadoProductosXOpcion } from '../data/bembosAPI'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useCarroCompras } from '../hooks/useCarroCompras'
import { Tarjeta } from '../components/Tarjeta'
import Slider from "react-slick"
import '../styles/tarjetas.css'
import '../styles/secciones.css'

export const loader = async ({ params }) => {
  const { categoria } = params;
  const listadoMenu = await obtenerListadoMenu();
  const existeCategoria =  listadoMenu.filter(element => {
    if (element.link.substring(element.link.lastIndexOf("/")+1) === categoria) {
      return element;
    }
  });
  const listadoOpciones = await obtenerListadoProductosXOpcion(categoria);
  if (listadoOpciones.length === 0 && Object.values(existeCategoria).length === 0) {
    throw new Response('', {
        status: 404, statusText: 'La categoría al cuál quiere acceder no existe.'
    });
  }
  return { listadoOpciones, listadoMenu };
}

export const MenuOpciones = () => {
  const { categoria }  = useParams();
  const location = useLocation();
  const scrollPosition = useScrollPosition();
  const { listadoOpciones, listadoMenu } = useLoaderData();
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
          {listadoMenu.map(enlace => (
            <li className="opcion__menu" key={enlace.link}>
              <Link key={enlace.link} className={`opcion__menu__link${location.pathname === enlace.link ? ' active' : ''}`} to={enlace.link}>
                {enlace.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="seccion__listado__productos contenedor">
        <h2 className="listado_productos__titulo">TITULO DE NUESTRO LISTADO DE PRODUCTOS</h2>
        {listadoOpciones.length === 0 ? (
          <p className="listado__productos__mensaje">Información no disponible en estos momentos.</p>
        ) : (
          <div className="listado__productos">
            {listadoOpciones.map(producto =>
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
              </Tarjeta>)}
          </div>
        )}
      </section>

      <section className="seccion__menu__opciones__carro">
        <div className="contenedor__slice__opciones__menu">
          <Slider {...settings}>
            {listadoMenu.map(enlace => (
              <li className="opcion__menu" key={enlace.link}>
                <Link className={`opcion__menu__link${location.pathname === enlace.link ? ' active' : ''}`} to={enlace.link}>
                  {enlace.nombre}
                </Link>
              </li>
            ))}
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
