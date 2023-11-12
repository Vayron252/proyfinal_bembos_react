import { useCarroCompras } from "../hooks/useCarroCompras"

export const ItemCarrito = ({ item }) => {
    const { imagen, nombre, id, subtotal, cantidad } = item;

    const { eliminarProductoxId,
            modificarProductoCantidad } = useCarroCompras();

    return (
        <div className="item__carrito__contenedor">
            <div className="item__carrito__informacion">
                <div className="carrito__contenedor__imagen">
                    <img className="carrito__imagen" src={imagen} alt="imagen producto" />
                </div>
                <div className="carrito__informacion">
                    <p className="carrito__informacion__nombre">{`${cantidad} x ${nombre}`}</p>
                    <p className="carrito__informacion__subtotal">{`S/. ${subtotal}`}</p>
                </div>
            </div>
            <div className="item__carrito__operacion">
                <div className="carrito__detalleeliminacion">
                    <i onClick={() => eliminarProductoxId(id)} className="fa-solid fa-trash-can detalleeliminacion__eliminar"></i>
                    <button className="detalleliminacion__leermas">Leer mas</button>
                </div>
                <div className="carrito__cantidades">
                    <button onClick={() => modificarProductoCantidad(id, -1)}>-</button>
                    <p>{cantidad}</p>
                    <button onClick={() => modificarProductoCantidad(id, 1)}>+</button>
                </div>
            </div>
        </div>
    )
}
