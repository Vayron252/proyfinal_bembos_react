import { Link, useNavigate } from 'react-router-dom'
import { useCarroCompras } from "../hooks/useCarroCompras"
import { ItemCarrito } from "./ItemCarrito";

export const CarroCompras = () => {
    const navigate = useNavigate();

    const { mostrarCarro,
            mostrarSuTotalCarrito,
            mostrarMontoTotal, 
            setMostrarCarro, 
            carroCompras,
            montoDelivery } = useCarroCompras();

    const handleIrAPagar = (e) => {
        e.preventDefault();
        setMostrarCarro(false);
        alert('Está llendo a pagar!!!');
    }

    const handleSeguirComprando = (e) => {
        e.preventDefault();
        setMostrarCarro(false);
        navigate('/menu');
    }

    return (
        <div className={`contenedor__carro${mostrarCarro ? ' mostrar' : ''}`}>
            <div className={`carro__compras${mostrarCarro ? ' mostrar' : ''}`}>
                <div className="carro__opciones">
                    <div className="opcion__carro__informacion">
                        <label htmlFor="" className="inforcion__entrega__titulo">Entregar en: </label>
                        <select name="" id="" className="informacion__entrega__direcciones">
                            <option value="">AV. Benavides N°1821</option>
                        </select>
                    </div>
                    <i className="fa-solid fa-circle-xmark opcion__carro__cerrar" onClick={() => setMostrarCarro(false)}></i>
                </div>
                {carroCompras.length <= 0 ? (
                    <div className="carro__vacio__contenido">
                        <i className="fa-solid fa-basket-shopping contenido__vacio__imagen"></i>
                        <p className="contenido__vacio__informacion">Tu canasta está vacía</p>
                        <p className="contenido__vacio__invitacion">Te invitamos a volver a nuestras tiendas y agregar productos a tu canasta</p>
                    </div>
                ) : (
                    <div className="carro__items__contenido">
                        <h3 className="contenido__items__titulo">Tu Carrito</h3>
                        <p className="contenido__items__titulo__cupones">
                            <span>¿Cuentas con cupones de Dscto.?</span> Ingrésalos en el siguiente paso
                        </p>
                        <div className="contenido__items__carrito">
                            {carroCompras.map(item => (
                                <ItemCarrito key={item.id} item={item} />                                
                            ))}
                        </div>
                        <div className="contenido__items__subtotal">
                            <p className="items__subtotal__titulo">Subtotal</p>
                            <p className="items__subtotal__monto">{`S/. ${mostrarSuTotalCarrito()}`}</p>
                        </div>
                        <div className="contenido__items__delivery">
                            <p className="items__delivery__titulo">Delivery</p>
                            <p className="items__delivery__monto">{`S/. ${montoDelivery}`}</p>
                        </div>
                        <div className="contenido__items__total">
                            <p className="items__total__titulo">Total a pagar</p>
                            <p className="items__total__monto">{`S/. ${mostrarMontoTotal()}`}</p>
                        </div>
                        <div className="carro__pago">
                            <Link className="pago__pagar" onClick={e => handleIrAPagar(e)}>Ir a Pagar</Link>
                            <Link className="pago__seguircomprando" onClick={e => handleSeguirComprando(e)}>Seguir Comprando</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
