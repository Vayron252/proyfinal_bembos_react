import axios from 'axios'

export const obtenerPromocionesOnline = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL);
    const { promociones_online } = data[8];
    return promociones_online;
}

export const obtenerListadoMenu = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL);
    const { menu } = data[9];
    return menu;
}

export const obtenerListadoProductosXOpcion = async (categoria) => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL);
    // const data2 = await axios.get(`${import.meta.env.VITE_API_URL_STRAPI}/productos?filters[categoria]=${categoria}`);
    // console.log('desde strapi');
    // console.log(data2);
    const resultado = data.filter(elemento => {
        if (Object.keys(elemento)[0] == categoria) {
            return elemento;
        }
    });
    if (resultado.length === 0) {
        return resultado;
    }
    return resultado[0][categoria];
}

export const obtenerProductoxNombre = async (categoria, nombreProducto) => {
    const productosXCategoria = await obtenerListadoProductosXOpcion(categoria);
    const producto = productosXCategoria.filter(elemento => elemento.link === nombreProducto);
    if (producto.length === 0) {
        return producto;
    }
    return producto[0];
}

export const obtenerPromocionesPersonales = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL);   
    const {promociones_personales_actualizado} = data[3];
    return promociones_personales_actualizado;
}

export const obtenerPromocionesParaDos = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL); 
    const {promociones_para_dos} = data[4];
    return promociones_para_dos;
}

export const obtenerPromocionesParaCompartir = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL);  
    const {promociones_para_compartir} = data[7];
    return promociones_para_compartir;
}

export const obtenerCupones = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL);  
    const {cupones} = data[5];
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

