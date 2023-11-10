import { createContext, useState } from "react"

export const CarroComprasContext = createContext();

export function CarroComprasProvider ({ children }) {
    const valorInicialCarro = [{nombre: 'Pollo'},{nombre: 'Combo'}];
    const [carroCompras, setCarroCompras] = useState(valorInicialCarro);

    return (
        <CarroComprasContext.Provider value={{ carroCompras, setCarroCompras }}>
            {children}
        </CarroComprasContext.Provider>
    )
}