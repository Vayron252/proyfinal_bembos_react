import { createContext, useState } from "react"

export const CarroComprasContext = createContext();

export function CarroComprasProvider ({ children }) {
    const valorInicialCarro = [
        {
            id: 1,
            nombre: 'Hamburguesa Cheese',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-cheese-base.jpg',
            cantidad: 1,
            monto: 18.9,
            subtotal: 18.9
        },
        {
            id: 2,
            nombre: 'Hamburguesa Bembos Queso Tocino',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-tocino_1.jpg',
            cantidad: 3,
            monto: 19.9,
            subtotal: 59.7
        }
    ];

    const [mostrarCarro, setMostrarCarro] = useState(false);
    const [carroCompras, setCarroCompras] = useState(valorInicialCarro);
    const [montoDelivery, setMontoDelivery] = useState(5);

    return (
        <CarroComprasContext.Provider value={{ carroCompras, setCarroCompras, mostrarCarro, setMostrarCarro, montoDelivery }}>
            {children}
        </CarroComprasContext.Provider>
    )
}