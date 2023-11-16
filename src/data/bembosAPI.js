import axios from 'axios'

export const obtenerPromocionesOnline = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/promociones_online`);
    return data;
}

export const obtenerListadoMenu = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/menu`);
    return data;
}

export const obtenerListadoProductosXOpcion = async (categoria) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/${categoria}`);
    return data;
}

export const obtenerProductoxNombre = async (categoria, nombreProducto) => {
    const productosXCategoria = await obtenerListadoProductosXOpcion(categoria);
    const producto = productosXCategoria.filter(elemento => elemento.link === nombreProducto);
    if (producto.length === 0) {
        return producto;
    }
    return producto[0];
}

export const obtenerRelacionXCategoria = async (categoria) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/relaciones`);
    const relacion = data.filter(elemento => elemento.categoria === categoria);
    return relacion;
}

export const obtenerPromocionesPersonales = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/promociones_personales`);
    return data;
}

export const obtenerPromocionesParaDos = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/promociones_para_dos`);
    return data;
}

export const obtenerPromocionesParaCompartir = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/promociones_para_compartir`);
    return data;
}

export const obtenerCupones = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cupones`);
    return data;
}

export const obtenerLocales = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/locales`);
    return data;
}