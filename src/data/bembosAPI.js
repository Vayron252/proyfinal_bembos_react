import axios from 'axios'

export const obtenerPromocionesOnline = async () => {
    const { data } = await axios.get(`http://localhost:3000/productos`);
    const { promociones_online } = data[6];
    return promociones_online;
}

export const obtenerListadoMenu = async () => {
    const { data } = await axios.get(`http://localhost:3000/productos`);
    const { menu } = data[7];
    return menu;
}

export const obtenerListadoProductosXOpcion = async (opcion) => {
    const { data } = await axios.get(`http://localhost:3000/productos`);   
    const resultado = data.filter(elemento => {
        if (Object.keys(elemento)[0] == opcion) {
            return elemento;
        }
    });
    return resultado[0][opcion];
}

export const obtenerPromocionesPersonales = async () => {
    const { data } = await axios.get(`http://localhost:3000/productos`);   
    const {promociones_personales_actualizado} = data[3];
    return promociones_personales_actualizado;
}

export const obtenerPromocionesParaDos = async () => {
    const { data } = await axios.get(`http://localhost:3000/productos`);  
    const {promociones_para_dos} = data[6];
    return promociones_para_dos;
}

export const obtenerPromocionesParaCompartir = async () => {
    const { data } = await axios.get(`http://localhost:3000/productos`);  
    const {promociones_para_compartir} = data[7];
    return promociones_para_compartir;
}

export const obtenerCupones = async () => {
    const { data } = await axios.get(`http://localhost:3000/productos`);  
    const {cupones} = data[4];
    return cupones;
}


export const obtenerListadoComplementos = () => {
    const listadoComplementos = [
        {
            "nombre": "Papas Inka Chips",
            "precio": 3,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-inka-chips-nueva.jpg",
            "id": 25
        },
        {
            "nombre": "Papas Fritas Bembos",
            "precio": 4.9,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nueva-papas-medianas_2.jpg",
            "id": 26
        },
        {
            "nombre": "Chicken nuggets",
            "precio": 10.5,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/n/u/nuggets-base.jpg",
            "id": 27
        },
        {
            "nombre": "Cheese Fingers",
            "precio": 11.9,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/cheese-fingers-base_3.jpg",
            "id": 28
        },
        {
            "nombre": "Family Box Piqueo",
            "precio": 22.9,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-piqueo-nuevo-abril.jpg",
            "id": 29
        }
    ]

    return listadoComplementos;
}

export const obtenerProductoxNombre = (nombreProducto) => {
    const producto = {
        informacion: {
            id_producto: 28,
            nombre_producto: 'Cheese Fingers',
            img_producto: 'https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/cheese-fingers-base_3.jpg',
            precio_producto: 11.9,
            descripcion_producto: `Perfectos para acompañar tu hamburguesa a la parrilla :
            Prueba unos ricos deditos de queso: En presentación de 4, 6 o 9 Cheese Fingers.
            Trozos alargados de queso mozzarella fritos para acompañar tu hamburguesa favorita.
            
            Mayonesa x1, Ketchup x1, Ají Bembos x1`
        }
    }

    return producto;
}