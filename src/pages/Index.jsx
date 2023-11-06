import { useLoaderData } from "react-router-dom"
import Slider from "react-slick"
import { Tarjeta } from '../components/Tarjeta'
import { obtenerPromocionesOnline } from '../data/bembosAPI'
import '../styles/listados.css'
import '../styles/tarjetas.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const loader = () => {
  const promociones = obtenerPromocionesOnline();
  return promociones;
}

export const Index = () => {
  const promociones = useLoaderData();

  return (
    <>
      <section>
        <h2>Promociones de hamburguesas online</h2>
        <Slider>
          {promociones.map(promo => (
            <Tarjeta>
              <div className="tarjeta__contenedor__imagen">
                <img className="tarjeta__imagen" src={promo.img} alt="imagen" />
              </div>
              <div className="tarjeta__contenido">
                <div className="tarjeta__contenido__informacion">
                  <h4 className="tarjeta__titulo">{promo.nombre}</h4>
                  <div className="tarjeta__precio">
                    <p className="tarjeta__precio__actual">{`S/.${promo.precio_actual}`}</p>
                    <p className="tarjeta__precio__anterior">{`S/.${promo.precio_antiguo}`}</p>
                  </div>
                </div>
                <button className="tarjeta__boton">Ver más</button>
              </div>
            </Tarjeta>
          ))}
        </Slider>
      </section>
      <section>
        <h2>Menu de hamburguesas online</h2>
        <Slider>
          <Tarjeta>
            <div className="tarjeta__contenedor__imagen">
              <img className="tarjeta__imagen" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp" alt="imagen" />
            </div>
            <div className="tarjeta__contenido">
              <div className="tarjeta__contenido__informacion">
                <h4 className="tarjeta__titulo">Promociones Exclusivas Web</h4>
              </div>
              <button className="tarjeta__boton">Ver Todos</button>
            </div>
          </Tarjeta>
          <Tarjeta>
            <div className="tarjeta__contenedor__imagen">
              <img className="tarjeta__imagen" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp" alt="imagen" />
            </div>
            <div className="tarjeta__contenido">
              <div className="tarjeta__contenido__informacion">
                <h4 className="tarjeta__titulo">Promociones Exclusivas Web</h4>
              </div>
              <button className="tarjeta__boton">Ver Todos</button>
            </div>
          </Tarjeta>
        </Slider>
      </section>
    </>
  )
}