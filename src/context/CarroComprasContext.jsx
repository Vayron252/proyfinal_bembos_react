import { createContext, useState } from "react"

export const CarroComprasContext = createContext();

export function CarroComprasProvider ({ children }) {
    const valorInicialCarro = [{nombre: 'Pollo'},{nombre: 'Combo'}];

    const [mostrarCarro, setMostrarCarro] = useState(false);
    const [carroCompras, setCarroCompras] = useState(valorInicialCarro);

    return (
        <CarroComprasContext.Provider value={{ carroCompras, setCarroCompras, mostrarCarro, setMostrarCarro }}>
            {children}
        </CarroComprasContext.Provider>
    )
}