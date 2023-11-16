import { useState } from "react"
import { useLoaderData, useNavigate, Link, useParams } from "react-router-dom"
import { obtenerProductoxNombre, obtenerRelacionXCategoria } from "../data/bembosAPI"
import { useCarroCompras } from "../hooks/useCarroCompras"
import { useScreenSize } from "../hooks/useScreenSize"
import { formatoDosDecimales } from "../utils/utilitarios"
import { Spinner } from "../components/Spinner"
import { Modal } from 'react-responsive-modal';
import { Pregunta } from "../components/Pregunta"
import '../styles/producto.css'
import 'react-responsive-modal/styles.css';

export const loader = async ({ params }) => {
  const { categoria, producto } = params;
  const relacion = await obtenerRelacionXCategoria(categoria);
  const informacion = await obtenerProductoxNombre(categoria, producto);
  if (informacion.length === 0) {
    throw new Response('', {
        status: 404, statusText: 'El producto no fue encontrado.'
    });
  }
  return {informacion, relacion};
}

export const ProductoCompra = () => {
  const [cantidad, setCantidad] = useState(1);
  const [open, setOpen] = useState(false);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);
  const [combinaciones, setCombinaciones] = useState([]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { width } = useScreenSize();
  const navigate = useNavigate();
  const { categoria, producto } = useParams();
  const {informacion, relacion} = useLoaderData();
  const { carroCompras, addProduct, setMostrarCarro, handleMenuBar } = useCarroCompras();

  const handleIncrementOrDecrementQuantity = (value) => {
    const nuevoValor = cantidad + value;
    if (nuevoValor <= 0) {
      return;
    }
    setCantidad(nuevoValor)
  }

  const handleAddToCar = () => {
    onOpenModal();
    setMostrarSpinner(true);
    const product = {
      nombre: informacion.nombre,
      imagen: informacion.img,
      codproducto: informacion.id,
      cantidad: cantidad,
      monto: informacion.precio,
      subtotal: Number.parseFloat(formatoDosDecimales(cantidad * informacion.precio))
    }
    setTimeout(() => {
      addProduct(product);
      setMostrarSpinner(false);
    }, 2000);
  }

  const handleKeepBuying = (e) => {
    e.preventDefault();
    onCloseModal();
  }

  const viewBagShop = (e) => {
    e.preventDefault();
    onCloseModal();
    setMostrarCarro(true);
  }

  return (
    <>
      <Modal open={open} onClose={onCloseModal} classNames={{ modal: 'modal__custom__compra' }} 
              center closeOnEsc={false} closeOnOverlayClick={false} showCloseIcon={false} blockScroll={false}>
        <div className="modal__compra">
          {mostrarSpinner ? (
            <Spinner />
          ) : (
            <div className="modal__compra__contenido">
              <div className="modal__compra__producto">
                <div className="modal__compra__producto__imagen__contenedor">
                  <img className="modal__compra__producto__imagen" src={informacion.img} alt="imagen producto" />  
                </div>
                <div className="modal__compra__producto__contenedor">
                  <h2 className="modal__compra__producto__aviso">Acabas de agregar</h2>
                  <div className="modal__compra__producto__contenido">
                    <p className="modal__compra__producto__nombre">{informacion.nombre}</p>
                    <p className="modal__compra__producto__bolsa">a tu Bolsa de Compras</p>
                  </div>
                </div>
              </div>
              <div className="modal__compra__redireccionamiento">
                <Link className="compra__redireccionamiento__seguircomprando" onClick={e => handleKeepBuying(e)}>Seguir comprando</Link>
                <Link className="compra__redireccionamiento__bolsa" onClick={e => viewBagShop(e)}>Ver Bolsa de Compras</Link>
              </div>
            </div>
          )}
        </div>
      </Modal>
      {width < 992 ? (
        <header className="header__back">
          <div className={`contenedor__header__back contenedor`}>
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
      ) : (<></>)}
      <div className={`seccion__item${width >= 992 ? ' contenedor' : ''}`}>
        <div className="seccion__item__contenedor__imagen">
          <img className="seccion__item__imagen" src={informacion.img} alt="imagen producto" />
          <div className="seccion__item__imagen__contenedor">
            <p className="seccion__item__imagen__info"><i className="fa-solid fa-circle-info"></i>Más información</p>
            <p className="seccion__item__imagen__terminoscondiciones">Términos y Condiciones</p>
          </div>
        </div>
        <div className="seccion__item__contenedor__contenido">
          <div className="seccion__item__contenido">
            <h3 className="seccion__item__contenido__titulo">{informacion.nombre}</h3>
            {relacion[0].preguntas.length > 0 ? (
              <section className="seccion__item__opciones">
                {relacion[0].preguntas.map(pregunta => (
                  <Pregunta key={pregunta.nropregunta} pregunta={pregunta} />
                ))}
            </section>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <footer className="footer__contenedor__operaciones">
        <div className="footer__operaciones">
          <button onClick={() => handleIncrementOrDecrementQuantity(-1)}>-</button>
          <p>{cantidad}</p>
          <button onClick={() => handleIncrementOrDecrementQuantity(1)}>+</button>
        </div>
        <div className="footer__agregarproducto">
          <p className="agregarproducto__acumulado">Acumulas 0Pts</p>
          <button className="agregarproducto__monto" 
            onClick={() => handleAddToCar()}>{`Agregar S/. ${formatoDosDecimales(cantidad * informacion.precio)}`}</button>
        </div>
      </footer>
    </>
  )
}