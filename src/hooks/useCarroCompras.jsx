import { useContext } from "react"
import { CarroComprasContext } from "../context/carroComprasContext"

export const useCarroCompras = () => {
    const { carroCompras, setCarroCompras } = useContext(CarroComprasContext);

    return { carroCompras, setCarroCompras }
}