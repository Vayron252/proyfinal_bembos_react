import { useEffect } from "react"
import { useLoaderData, useNavigate, Link, useParams } from "react-router-dom"
import { obtenerProductoxNombre } from "../data/bembosAPI"
import { useCarroCompras } from "../hooks/useCarroCompras"
import '../styles/producto.css'

export const loader = ({ params }) => {
  const { categoria, producto } = params;
  const productoConsultado = obtenerProductoxNombre(producto);
  return productoConsultado;
}

export const ProductoCompra = () => {
  const { categoria, producto } = useParams();
  const navigate = useNavigate();
  const { informacion } = useLoaderData();
  const { setMostrarCarro, handleMenuBar } = useCarroCompras();


  console.log(informacion);

  return (
    <>
      <header className="header__back">
        <div className="contenedor__header__back contenedor">
          <i className="fa-solid fa-circle-arrow-left header__back__volver" onClick={() => navigate(-1)}></i>
          <div className="header__back__compra__barra">
            <i className="fa-solid fa-cart-shopping" onClick={() => setMostrarCarro(true)}></i>
            <i className="fa-solid fa-bars" onClick={() => handleMenuBar()}></i>
          </div>
        </div>
        <div className="contenedor__header__back__navegacion">
          <h2 className="header__back__navegacion">
            <Link to={'/'}>Inicio</Link>{' > '}
            <Link to={'/menu'}>Menú</Link>{' > '}
            <Link to={`/menu/${categoria}`}>{categoria}</Link>{' > '}
            <Link to={`/menu/${categoria}/${producto}`}>{producto}</Link>
          </h2>
        </div>
      </header>
      <div className="seccion__item">
        <div className="seccion__item__contenedor__imagen">
          <img className="seccion__item__imagen" src={informacion.img_producto} alt="imagen producto" />
          <p className="seccion__item__imagen__info"><i class="fa-solid fa-circle-info"></i>Más información</p>
        </div>
        <div className="seccion__item__contenedor__contenido">
          <div className="seccion__item__contenido">
          
          </div>
        </div>
      </div>
      <footer className="footer__contenedor__operaciones">
        <div className="footer__operaciones">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <div className="footer__agregarproducto">
          <p className="agregarproducto__acumulado">Acumulas 0Pts</p>
          <button className="agregarproducto__monto">Agregar S/. 30.80</button>
        </div>
      </footer>
    </>
  )
}