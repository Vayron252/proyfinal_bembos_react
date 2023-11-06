import { Tarjeta } from '../components/Tarjeta'
import '../styles/listados.css'
import '../styles/tarjetas.css'

export const Home = () => {
  return (
    <>
      <section>
        <h2>Promociones de hamburguesas online</h2>
        <div className="listado__promociones__online">
          <Tarjeta>
            <div className="tarjeta__contenedor__imagen">
              <img className="tarjeta__imagen" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp" alt="imagen" />
            </div>
            <div className="tarjeta__contenido">
              <div className="tarjeta__contenido__informacion">
                <h4 className="tarjeta__titulo">Dupla Perfecta</h4>
                <div className="tarjeta__precio">
                  <p className="tarjeta__precio__actual">S/.30.90</p>
                  <p className="tarjeta__precio__anterior">S/.40.60</p>
                </div>
              </div>
              <button className="tarjeta__boton">Ver más</button>
            </div>
          </Tarjeta>
          <Tarjeta>
            <div className="tarjeta__contenedor__imagen">
              <img className="tarjeta__imagen" src="https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp" alt="imagen" />
            </div>
            <div className="tarjeta__contenido">
              <div className="tarjeta__contenido__informacion">
                <h4 className="tarjeta__titulo">Dupla Perfecta</h4>
                <div className="tarjeta__precio">
                  <p className="tarjeta__precio__actual">S/.30.90</p>
                  <p className="tarjeta__precio__anterior">S/.40.60</p>
                </div>
              </div>
              <button className="tarjeta__boton">Ver más</button>
            </div>
          </Tarjeta>
        </div>
      </section>
      <section>
        <h2>Menu de hamburguesas online</h2>
        <div className="listado__promociones__online">
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
        </div>
      </section>
    </>
  )
}