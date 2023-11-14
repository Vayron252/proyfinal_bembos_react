import { useLoaderData } from "react-router-dom"
import Slider from "react-slick"
import { AutoSlider } from "../components/AutoSlider"
import { Tarjeta } from '../components/Tarjeta'
import { HomePromoSocial } from "../components/HomePromoSocial"
import { OpcionesNavegacion } from "../components/OpcionesNavegacion"
import { obtenerPromocionesOnline, obtenerListadoMenu } from '../data/bembosAPI'
import { useScreenSize } from '../hooks/useScreenSize'
import '../styles/tarjetas.css'
import '../styles/secciones.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const loader = async () => {
  const promociones = await obtenerPromocionesOnline();
  const listadoMenu = await obtenerListadoMenu();
  // if (Object.values(promociones).length === 0 || Object.values(listadoMenu).length === 0) {
  //   throw new Response('', {
  //     status: 404, statusText: 'Información no encontrada.'
  //   });
  // }
  return { promociones, listadoMenu };
}

export const Index = () => {
  const { width } = useScreenSize();
  const { promociones, listadoMenu } = useLoaderData();

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    slidesPerRow: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <>
      <AutoSlider />
      {width < 992 ? 
        <section className="seccion__navegacion__index contenedor">
          <OpcionesNavegacion />
        </section> : <></>}
      <section className="seccion__promociones__online contenedor">
        <h2 className="promociones__online__titulo">Promociones de hamburguesas online</h2>
        <Slider {...settings}>

          {promociones.map(promo => (
            <Tarjeta key={promo.id}>
              <div className="tarjeta">
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
              </div>
            </Tarjeta>
          ))}
        </Slider>
      </section>
      <section className="seccion__menuburguer__online contenedor">
        <h2 className="menuburguer__online__titulo">Menu de hamburguesas online</h2>
        <Slider {...settings}>
          {listadoMenu.map(itemMenu => (
            <Tarjeta key={itemMenu.nombre}>
              <div className="tarjeta">
                <div className="tarjeta__contenedor__imagen">
                  <img className="tarjeta__imagen" src={itemMenu.img} alt="imagen" />
                </div>
                <div className="tarjeta__contenido">
                  <div className="tarjeta__contenido__informacion">
                    <h4 className="tarjeta__titulo tarjeta__titulo__menuburguer">{itemMenu.nombre}</h4>
                  </div>
                  <button className="tarjeta__boton">Ver Todos</button>
                </div>
              </div>
            </Tarjeta>
          ))}
        </Slider>
      </section>
      <HomePromoSocial/>
    </>
  )
}