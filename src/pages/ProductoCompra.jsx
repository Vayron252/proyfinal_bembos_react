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
  const { carroCompras ,setMostrarCarro, handleMenuBar } = useCarroCompras();

  return (
    <>
      <header className="header__back">
        <div className="contenedor__header__back contenedor">
          <i className="fa-solid fa-circle-arrow-left header__back__volver" onClick={() => navigate(-1)}></i>
          <div className="header__back__compra__barra">
            <div className="header__back__compra__shopping">
              <i className="fa-solid fa-cart-shopping" onClick={() => setMostrarCarro(true)}></i>
              <span>{carroCompras.length}</span>
            </div>
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
          <div className="seccion__item__imagen__contenedor">
            <p className="seccion__item__imagen__info"><i class="fa-solid fa-circle-info"></i>Más información</p>
            <p className="seccion__item__imagen__terminoscondiciones">Términos y Condiciones</p>
          </div>
        </div>
        <div className="seccion__item__contenedor__contenido">
          <div className="seccion__item__contenido">
            <h3 className="seccion__item__contenido__titulo">Titulo del producto</h3>
            <section className="seccion__item__opciones">
              <details className="item__opciones" open>
                <summary className="item__opciones__pregunta">
                  <div className="item__opciones__pregunta__contenedor">
                    <span className="item__opciones__pregunta__numeracion">1</span>
                    <h3 className="item__opciones__pregunta__titulo">Elige el tamaño de tu hamburguesa</h3>
                  </div>
                </summary>
                <div className="item__opciones__respuestas">
                  <p>{`(El número de complementos será igual al número de productos seleccionados en el cuadro cantidad)`}</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                </div>
              </details>
              <details className="item__opciones" open>
                <summary className="item__opciones__pregunta">
                  <div className="item__opciones__pregunta__contenedor">
                    <span className="item__opciones__pregunta__numeracion">1</span>
                    <h3 className="item__opciones__pregunta__titulo">Elige el tamaño de tu hamburguesa</h3>
                  </div>
                </summary>
                <div className="item__opciones__respuestas">
                  <p>{`(El número de complementos será igual al número de productos seleccionados en el cuadro cantidad)`}</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                </div>
              </details>
              <details className="item__opciones" open>
                <summary className="item__opciones__pregunta">
                  <div className="item__opciones__pregunta__contenedor">
                    <span className="item__opciones__pregunta__numeracion">1</span>
                    <h3 className="item__opciones__pregunta__titulo">Elige el tamaño de tu hamburguesa</h3>
                  </div>
                </summary>
                <div className="item__opciones__respuestas">
                  <p>{`(El número de complementos será igual al número de productos seleccionados en el cuadro cantidad)`}</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                </div>
              </details>
              <details className="item__opciones" open>
                <summary className="item__opciones__pregunta">
                  <div className="item__opciones__pregunta__contenedor">
                    <span className="item__opciones__pregunta__numeracion">1</span>
                    <h3 className="item__opciones__pregunta__titulo">Elige el tamaño de tu hamburguesa</h3>
                  </div>
                </summary>
                <div className="item__opciones__respuestas">
                  <p>{`(El número de complementos será igual al número de productos seleccionados en el cuadro cantidad)`}</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                  <p>contenido</p>
                </div>
              </details>
            </section>
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