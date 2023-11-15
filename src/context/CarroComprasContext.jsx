import { createContext, useState } from "react"

export const CarroComprasContext = createContext();

export function CarroComprasProvider ({ children }) {
    const valorInicialCarro = [
        {
            id: 1,
            nombre: 'Hamburguesa Cheese',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-cheese-base.jpg',
            codproducto: 25,
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
        },
        {
            id: 3,
            nombre: 'Coca Cola Sabor Original 500 ml',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/coca-cola-original-500ml-nuevo.jpg',
            cantidad: 1,
            monto: 5.9,
            subtotal: 5.9
        },
        {
            id: 4,
            nombre: 'Papas Fritas Bembos',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nueva-papas-medianas_2.jpg',
            cantidad: 2,
            monto: 4.9,
            subtotal: 9.8
        },
        {
            id: 5,
            nombre: 'Cheese Fingers',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/cheese-fingers-base_3.jpg',
            cantidad: 1,
            monto: 11.9,
            subtotal: 11.9
        },
        {
            id: 6,
            nombre: 'Chicken nuggets',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nuggets-base.jpg',
            cantidad: 3,
            monto: 10.5,
            subtotal: 31.5
        },
        {
            id: 7,
            nombre: 'Agua San Luis S/G',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/s/a/san-luis-sin-gas-nueva.jpg',
            cantidad: 1,
            monto: 4.9,
            subtotal: 4.9
        },
        {
            id: 8,
            nombre: 'Hamburguesa A lo Pobre',
            imagen: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-a-lo-pobre-base_1.jpg',
            cantidad: 1,
            monto: 20.9,
            subtotal: 20.9
        }
    ];
    
    const [menuBarActive, setMenuBarActive] = useState(false);
    const [mostrarCarro, setMostrarCarro] = useState(false);
    const [carroCompras, setCarroCompras] = useState(valorInicialCarro);
    const [montoDelivery, setMontoDelivery] = useState(5);

    return (
        <CarroComprasContext.Provider 
            value={{ carroCompras, setCarroCompras, 
                    mostrarCarro, setMostrarCarro, 
                    montoDelivery,
                    menuBarActive, setMenuBarActive }}>
            {children}
        </CarroComprasContext.Provider>
    )
}