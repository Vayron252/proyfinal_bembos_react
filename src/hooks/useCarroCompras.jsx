import { useContext } from "react"
import { CarroComprasContext } from "../context/CarroComprasContext"
import { formatoDosDecimales } from "../utils/utilitarios";

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
        return formatoDosDecimales(sumarSubTotales);
    }

    const mostrarMontoTotal = () => {
        const total = Number.parseFloat(mostrarSuTotalCarrito()) + montoDelivery;
        return formatoDosDecimales(total);
    }

    const addProduct = (product) => {
        let correlativeId = 1;
        if (carroCompras.length !== 0) {
            const valorMayorId = carroCompras.reduce((previous, current) => {
                return current.id > previous.id ? current : previous;
            });
            correlativeId = valorMayorId.id + 1;
        }
        product.id = correlativeId;
        setCarroCompras([...carroCompras, product]);
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
        productoModificar.subtotal = Number.parseFloat(formatoDosDecimales(productoModificar.monto * cantidadNueva));
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
        addProduct,
        mostrarCarro,
        setMostrarCarro,
        montoDelivery,
        menuBarActive,
        handleMenuBar
    }
}