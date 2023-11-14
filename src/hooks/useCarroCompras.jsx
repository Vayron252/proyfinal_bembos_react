import { useContext } from "react"
import { CarroComprasContext } from "../context/CarroComprasContext"

export const useCarroCompras = () => {
    const { carroCompras, setCarroCompras, 
            mostrarCarro, setMostrarCarro, 
            montoDelivery,
            menuBarActive, setMenuBarActive } = useContext(CarroComprasContext);

    const handleMenuBar = () => {
        if (menuBarActive) {
            setMenuBarActive(false);
        } else {
            setMenuBarActive(true);
        }
    }

    const mostrarSuTotalCarrito = () => {
        const sumarSubTotales = carroCompras.reduce((acumulado, carro) => acumulado + carro.subtotal, 0);
        return sumarSubTotales;
    }

    const mostrarMontoTotal = () => {
        const total = mostrarSuTotalCarrito() + montoDelivery;
        return total;
    }

    const eliminarProductoxId = (nroItem) => {
        const productosSinId = carroCompras.filter(producto => producto.id !== nroItem);
        setCarroCompras(productosSinId);
    }

    const modificarProductoCantidad = (nroItem, cantidad) => {
        const productoModificar = carroCompras.find(producto => producto.id === nroItem);
        const cantidadNueva = productoModificar.cantidad + cantidad;
        if (cantidadNueva <= 0) {
            return;
        }
        productoModificar.cantidad = cantidadNueva;
        productoModificar.subtotal = productoModificar.monto * cantidadNueva;
        const productosCarrito = carroCompras.map(producto => producto.id === nroItem ? productoModificar : producto);
        setCarroCompras(productosCarrito);
    }

    return {
        carroCompras,
        setCarroCompras,
        mostrarSuTotalCarrito,
        mostrarMontoTotal,
        eliminarProductoxId,
        modificarProductoCantidad,
        mostrarCarro,
        setMostrarCarro,
        montoDelivery,
        menuBarActive,
        handleMenuBar
    }
}