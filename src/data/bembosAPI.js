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

export const obtenerPromocionesPersonales = () => {
    const promocionesPersonalesActualizado = [

        {
            "nombre": "Combo A lo pobre",
            "descripcion": "1 A lo pobre mediana + 1 Inca Kola",
            "precio_actual": 14.9,
            "precio_antiguo": 26.8,
            "descuento": 44,
            "id": 1,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-a-lo-pobre-oct.webp"
        },
        {
            "nombre": "Personal Cheese",
            "descripcion": "Cheese mediana, papa mediana",
            "precio_actual": 17.90,
            "precio_antiguo": 23.0,
            "descuento": 25,
            "id": 2,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/e/personal-cheese-bembos.webp"
        },

        {
            "nombre": "Personal Clásico",
            "descripcion": "Clásica mediana, papa mediana",
            "precio_actual": 15.90,
            "precio_antiguo": 21.0,
            "descuento": 27,
            "id": 3,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/e/personal-clasico-bembos-delivery.webp"
        },

        {
            "nombre": "Promo Churrita",
            "descripcion": "1 churrita regular, 1 papa regular, 1 gaseosa 500 ml",
            "precio_actual": 16.90,
            "precio_antiguo": 27.70,
            "descuento": 14,
            "descuento": 39,
            "id": 4,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/churrita-base-individual.webp"
        },

        {
            "nombre": "Combo Tártara",
            "descripcion": "Tártara regular + papa mediana",
            "precio_actual": 11.90,
            "precio_antiguo": 13.00,
            "descuento": 14,
            "id": 5,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/a/base-bembos-tartara_2.webp"
        },

        {
            "nombre": "Parrillera con antojito",
            "descripcion": "1 Parrillera, 1 papa regular, 1 helado Mini..",
            "precio_actual": 18.9,
            "precio_antiguo": 28.7,
            "descuento": 34,
            "id": 6,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-parrillera-mini-princesa.webp"
        }
    ]

    return promocionesPersonalesActualizado;
}

export const obtenerCupones = () => {
    const cupones = [

        {
            "nombre": "Combo Interbank",
            "descripcion": "1 queso tocino regular, nuggets x 6, 1 papa regular",
            "precio_actual": 19.90,
            "precio_antiguo": 30.30,
            "descuento": 34,
            "id": 1,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-interbank-oct.webp"
        },
        {
            "nombre": "Parrillera Regular",
            "descripcion": "2 parrilleras regulares, 2 papas regulares",
            "aviso": "Ingresa el cupón de suscriptores de pchujoy.com antes de finalizar la compra y obtén la promoción a S/.26.90",
            "precio_actual": 47.60,
            "precio_antiguo": "",
            "id": 2,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/e/personal-cheese-bembos.webp",
            "terminos":"Términos y Condiciones"
        },

        {
            "nombre": "Entel 2x1 Royal 2023",
            "descripcion": "2 Royal mediana, 2 papas regulares Mayonesa x 2,...",
            "aviso": "Ingresa el cupón de Entel antes de finalizar la compra y obtén la promoción a S/23.80",
            "precio_actual": 47.60,
            "precio_antiguo": "",
            "id": 3,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-royal-800x1370.webp",
            "img_entel": "https://www.bembos.com.pe/_ipx/s_184x28/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/e/n/entel_4.png"
        },

        {
            "nombre": "Plaza Vea Dúo",
            "descripcion": "1 Queso Tocino regular, 1 Clásica regular, 2...",
            "aviso": "Ingresa el cupón de Yape antes de finalizar la compra y obtén la promoción a S/21.90",
            "precio_actual": 36.90,
            "precio_antiguo": "",
            "id": 4,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-pv-bb.webp",
            
        },

        {
            "nombre": "Entel 2x1 Royal 2023",
            "descripcion": "2 Parrillera mediana, 2 papa regular Mayonesa x2, Ketch...",
            "aviso": "Ingresa el cupón de Entel antes de finalizar la compra y obtén la promoción a S/27.80",
            "precio_actual": 55.60,
            "precio_antiguo": "",
            "id": 5,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-parrillera-800x1370.webp",
            "img_entel": "https://www.bembos.com.pe/_ipx/s_184x28/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/e/n/entel_4.png"
        },

        {
            "nombre": "Entel 2x1 Royal 2023",
            "descripcion": "2 Clásicas mediana, 2 papa regular, Mayonesa x2, Ketch...",
            "aviso": "Ingresa el cupón de Entel antes de finalizar la compra y obtén la promoción a S/20.80",
            "precio_actual": 41.60,
            "precio_antiguo": "",
            "id": 6,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-clasica-800x1370.webp",
            "img_entel": "https://www.bembos.com.pe/_ipx/s_184x28/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/e/n/entel_4.png"
        },

        {
            "nombre": "2X1 Queabuso 2023",
            "descripcion": "2 Queabuso medianas, 2 papas regulares, Mayonesa x2,...",
            "aviso": "Ingresa el cupón de Entel antes de finalizar la compra y obtén la promoción a S/24.80",
            "precio_actual": 49.60,
            "precio_antiguo": "",
            "id": 7,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-queabuso-2x1_1.webp",
            "img_entel": "https://www.bembos.com.pe/_ipx/s_184x28/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/e/n/entel_4.png"      
        }
        
    ]

    return cupones;
}

export const obtenerPromocionesParaDos = () => {
    const promocionesParaDos = [

        {
            "nombre_azul": "Dupla Perfecta Cyber",
            "descripcion": "1 Cheese regular, 1 Royal regular, 2 papas regulares..",
            "precio_actual": 24.90,
            "precio_antiguo": 40.60,
            "descuento": 39,
            "id": 1,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-dupla-perfecta-cyber-nov-2023.webp",
            "terminos_negro":"Términos y Condiciones"
        },
        {
            "nombre_azul": "Dúo Queso Tocino",
            "descripcion": "2 Queso Tocino regulares, 2 Papas medianas.",
            "precio_actual": 27.90,
            "precio_antiguo": "43.60",
            "descuento": 42,
            "id": 2,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-dupla-perfecta-cyber-nov-2023.webp",
            "terminos_blanco":"Términos y Condiciones"
        },

        {
            "nombre_negro": "Dúo Churrita",
            "descripcion": "2 Churritas regulares, 2 papas regulares",
            "precio_actual": 23.90,
            "precio_antiguo": 44.60,
            "descuento": 45,
            "id": 3,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combos-800x1370-churrita.webp",
            "terminos_blanco":"Términos y Condiciones"
        },

        {
            "nombre_negro": "Dúo Extrema",
            "descripcion": "2 Extrema regulares + 2 papas regulares",
            "precio_actual": 30.90,
            "precio_antiguo": 51.60,
            "descuento": 40,
            "id": 4,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-duo-extrema.webp",
            "terminos_blanco":"Términos y Condiciones"          
        },

        {
            "nombre_negro": "Dupla Perfecta",
            "descripcion": "1 Cheese regular, 1 Royal regular, 2 papas regulares",
            "precio_actual": 30.90,
            "precio_antiguo": 40.60,
            "descuento": 24,
            "id": 5,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp",
        },

        {
            "nombre_negro": "Queabuso Cyber Yape",
            "descripcion": "1 Queabuso regular, 1 Clásica regular, 2 papas regulares",
            "precio_actual": 39.60,
            "precio_antiguo": 20.60,
            "descuento": 13,
            "id": 6,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/q/u/queabuso-800x1370.webp",
            "terminos_blanco":"Términos y Condiciones"  
        }
        
        
    ]

    return promocionesParaDos;
}



export const obtenerPromocionesParaCompartir = () => {
    const promocionesParaCompartir = [

        {
            "nombre_azul": "Familiar Parrillero Cyber",
            "descripcion": "2 Clásicas regulares, 2 Parrilleras regulares, 4 papa...",
            "precio_actual": 49.90,
            "precio_antiguo": 85.20,
            "descuento": 41,
            "id": 1,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-dupla-perfecta-cyber-nov-2023.webp",
            "terminos_negro":"Términos y Condiciones"
        },
        {
            "nombre_azul": "Extremadamente Cheesy Cyber",
            "descripcion": "2 Extremas regulares, 2 Cheese regulares, 4 papas...",
            "precio_actual": 52.90,
            "precio_antiguo": "91.20",
            "descuento": 42,
            "id": 2,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-dupla-perfecta-cyber-nov-2023.webp",
            "terminos_negro":"Términos y Condiciones"
        },

        {
            "nombre_negro": "Trío Power",
            "descripcion": "2 Clásicas medianas, 1 A lo Pobre regulares, 3 Papas...",
            "precio_actual": 45.90,
            "precio_antiguo": 66.40,
            "descuento": 31,
            "id": 3,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/t/r/trio-power-bembos.webp",
            "terminos_blanco":"Términos y Condiciones"
        },

        {
            "nombre_negro": "Familiar 1",
            "descripcion": "4 Royal regulares, 4 Papas regulares",
            "precio_actual": 49.90,
            "precio_antiguo": 83.20,
            "descuento": 40,
            "id": 4,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/f/a/familiar-1-bembos.webp",
            "terminos_blanco":"Términos y Condiciones"          
        },

        {
            "nombre_negro": "La Cuádruple",
            "descripcion": "2 Queso Tocino regular, 2 Churrita regular, 1 papa...",
            "precio_actual": 51.90,
            "precio_antiguo": 79.10,
            "descuento": 40,
            "id": 5,
            "img": "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-parrillera-800x1370.webp",
            "img_web": "https://www.bembos.com.pe/_ipx/q_85,w_250,f_webp/img/exclusivo-web.webp",
            "terminos_blanco":"Términos y Condiciones"
        }
        
    ]

    return promocionesParaCompartir;
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