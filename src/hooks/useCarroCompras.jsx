import { useContext } from "react"
import { CarroComprasContext } from "../context/CarroComprasContext"

export const useCarroCompras = () => {
    const { carroCompras, setCarroCompras, mostrarCarro, setMostrarCarro } = useContext(CarroComprasContext);

    return { carroCompras, setCarroCompras, mostrarCarro, setMostrarCarro }
}